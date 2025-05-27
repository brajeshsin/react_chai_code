import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/learn_rout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/learn_rout"!</div>
}
