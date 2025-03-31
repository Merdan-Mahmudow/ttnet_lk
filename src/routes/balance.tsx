import { createFileRoute } from '@tanstack/react-router'
import style from "../styles/balance.module.css"

export const Route = createFileRoute('/balance')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
    </div>
  )
}
