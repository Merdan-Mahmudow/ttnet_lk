import { createFileRoute } from '@tanstack/react-router'
import style from "../styles/settings.module.css"

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <p className={style.title}>Настройка оборудования</p>
    </div>)
}
