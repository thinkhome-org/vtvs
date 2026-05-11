import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/en/bulletin')({
  component: BulletinLayout,
})

function BulletinLayout() {
  return <Outlet />
}
