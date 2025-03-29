import { createFileRoute } from '@tanstack/react-router'
import style from "../styles/support.module.css"

export const Route = createFileRoute('/support')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
    <p className={style.title}>Чат с поддержкой</p>
  </div>
  )
}
