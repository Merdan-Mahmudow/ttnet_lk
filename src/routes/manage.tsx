import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/manage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/manage"!</div>
}
