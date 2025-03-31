import { createFileRoute } from '@tanstack/react-router'
import style from "../styles/manage.module.css"

export const Route = createFileRoute('/manage')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
    </div>
  )
}
