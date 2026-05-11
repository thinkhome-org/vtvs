/**
 * Reads downloaded bulletin HTML snapshots from ./bulletin-source/
 * and writes ../src/data/bulletins.generated.ts with merged issues + anchor IDs.
 *
 * To refresh: place *.html files here (from vtvs.cz bulletin-*.php pages),
 * then: node scripts/build-bulletin-data.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC_DIR = path.join(__dirname, 'bulletin-source')
const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'bulletins.generated.ts')

function extractContentInner(html) {
  const m = html.match(
    /<div id="content">([\s\S]*?)<\/div>\s*\r?\n\s*<!-- menu -->/,
  )
  if (!m) throw new Error('Could not find content div')
  return m[1].trim()
}

/** Body after first <div class="hr"></div> inside content */
function bodyAfterHr(inner) {
  const idx = inner.search(/<div class="hr"><\/div>/i)
  if (idx === -1) return inner.trim()
  return inner.slice(idx + `<div class="hr"></div>`.length).trim()
}

function stripLeadingH1(inner) {
  return inner.replace(/^\s*<h1>[\s\S]*?<\/h1>\s*/i, '').trim()
}

function extractH1(inner) {
  const m = inner.match(/^\s*<h1>([\s\S]*?)<\/h1>/i)
  return m ? m[1].replace(/\s+/g, ' ').trim() : ''
}

function extractTocLabels(inner) {
  const ul = inner.match(/<ul>[\s\S]*?<\/ul>/i)
  if (!ul) return []
  const items = [...ul[0].matchAll(/<li>([\s\S]*?)<\/li>/gi)]
  return items.map((x) =>
    x[1]
      .replace(/<a[^>]*>/gi, '')
      .replace(/<\/a>/gi, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim(),
  )
}

function rewriteBulletinLinks(html, issueSlug) {
  return html.replace(
    /href="(bulletin-[^"]+\.php)"/gi,
    (_, file) => {
      const clean = file.replace(/^\//, '')
      if (clean.includes('-') && /\d-\d/.test(clean.replace('bulletin-', ''))) {
        const mm = clean.match(/bulletin-(\d{4})(\d{2})-(\d+)\.php/i)
        if (mm) {
          const slug = `${mm[1]}-${mm[2]}`
          return `href="/bulletin/${slug}#sekce-${mm[3]}"`
        }
      }
      const m2 = clean.match(/bulletin-(\d{4})(\d{2})\.php/i)
      if (m2) return `href="/bulletin/${m2[1]}-${m2[2]}"`
      return `href="/bulletin/${issueSlug}"`
    },
  )
}

const mergedIssues = [
  {
    slug: '2016-01',
    files: [
      'bulletin-201601-1.php.html',
      'bulletin-201601-2.php.html',
      'bulletin-201601-3.php.html',
      'bulletin-201601-4.php.html',
      'bulletin-201601-5.php.html',
    ],
  },
  {
    slug: '2015-02',
    files: ['bulletin-201502-1.php.html', 'bulletin-201502-2.php.html'],
  },
  {
    slug: '2015-01',
    files: [
      'bulletin-201501-1.php.html',
      'bulletin-201501-2.php.html',
      'bulletin-201501-3.php.html',
      'bulletin-201501-4.php.html',
    ],
  },
  { slug: '2014-01', files: ['bulletin-201401.php.html'] },
  { slug: '2013-02', files: ['bulletin-201302.php.html'] },
  { slug: '2013-01', files: ['bulletin-201301.php.html'] },
  { slug: '2012-04', files: ['bulletin-201204.php.html'] },
  { slug: '2012-03', files: ['bulletin-201203.php.html'] },
  { slug: '2012-02', files: ['bulletin-201202.php.html'] },
  { slug: '2012-01', files: ['bulletin-201201.php.html'] },
  { slug: '2011-02', files: ['bulletin-201102.php.html'] },
  { slug: '2011-01', files: ['bulletin-201101.php.html'] },
]

function buildMerged(issue) {
  const parts = []
  let h1 = ''
  let tocLabels = []

  issue.files.forEach((filename, i) => {
    const html = fs.readFileSync(path.join(SRC_DIR, filename), 'utf8')
    const inner = extractContentInner(html)
    if (i === 0) {
      h1 = extractH1(inner)
      tocLabels = extractTocLabels(inner)
      const body = bodyAfterHr(inner)
      parts.push(`<section id="sekce-${i + 1}">${body}</section>`)
    } else {
      let rest = stripLeadingH1(inner).replace(/^<ul>[\s\S]*?<\/ul>\s*/i, '').trim()
      rest = bodyAfterHr(rest)
      parts.push(`<section id="sekce-${i + 1}">${rest}</section>`)
    }
  })

  if (issue.files.length === 1) {
    const single = extractContentInner(
      fs.readFileSync(path.join(SRC_DIR, issue.files[0]), 'utf8'),
    )
    h1 = extractH1(single)
    const body = stripLeadingH1(single).trim()
    let html =
      `<h1 class="bulletin-source-h1">${h1}</h1>\n` +
      rewriteBulletinLinks(body, issue.slug)
    html = html.replace(/src="images\//g, 'src="/images/')
    return { title: h1, html }
  }

  const tocItems = tocLabels
    .map(
      (label, i) =>
        `<li><a href="#sekce-${i + 1}">${label}</a></li>`,
    )
    .join('\n')

  let mergedHtml =
    `<h1 class="bulletin-source-h1">${h1}</h1>\n` +
    `<nav class="bulletin-source-toc" aria-label="Obsah bulletinu"><ul>\n${tocItems}\n</ul></nav>\n` +
    `<div class="hr bulletin-source-hr" role="presentation"></div>\n` +
    parts
      .map((p) => rewriteBulletinLinks(p, issue.slug))
      .join('\n')

  mergedHtml = mergedHtml.replace(/src="images\//g, 'src="/images/')
  return { title: h1, html: mergedHtml }
}

function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error('Missing', SRC_DIR)
    process.exit(1)
  }
  const records = {}
  const meta = []
  for (const issue of mergedIssues) {
    for (const f of issue.files) {
      const p = path.join(SRC_DIR, f)
      if (!fs.existsSync(p)) {
        console.error('Missing file:', p)
        process.exit(1)
      }
    }
    const { title, html } = buildMerged(issue)
    records[issue.slug] = { title, html }
    meta.push({ slug: issue.slug, title, sectionCount: issue.files.length })
  }

  const out = `/* eslint-disable */
// AUTO-GENERATED by scripts/build-bulletin-data.mjs — do not edit by hand.

export type BulletinRecord = { title: string; html: string }

export const bulletinBySlug: Record<string, BulletinRecord> = ${JSON.stringify(records, null, 2)}

export const bulletinMetaList = ${JSON.stringify(meta, null, 2)} as const

export type BulletinSlug = (typeof bulletinMetaList)[number]['slug']
`

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true })
  fs.writeFileSync(OUT_FILE, out, 'utf8')
  console.log('Wrote', OUT_FILE)
}

main()
