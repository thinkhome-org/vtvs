import { PRICING_ROWS } from '../data/pricing'

export function PricingTable() {
  return (
    <>
      <div className="pricing-table-wrap" aria-hidden>
        <table className="table pricing-table">
          <thead>
            <tr>
              <th>položka</th>
              <th className="num">cena bez DPH</th>
              <th className="num">cena s DPH</th>
            </tr>
          </thead>
          <tbody>
            {PRICING_ROWS.map((r) => (
              <tr key={r.desc}>
                <td>{r.desc}</td>
                <td className="num">{r.bezDph}</td>
                <td className="num">{r.sDph}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dl className="pricing-dl">
        {PRICING_ROWS.map((r) => (
          <div key={r.desc} className="pricing-dl-row">
            <dt>{r.desc}</dt>
            <dd>
              <span className="mono">{r.bezDph}</span>
              {' · '}
              <span className="mono">{r.sDph}</span>
            </dd>
          </div>
        ))}
      </dl>
    </>
  )
}
