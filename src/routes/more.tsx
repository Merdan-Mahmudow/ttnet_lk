import { createFileRoute } from '@tanstack/react-router'
import style from "../styles/more.module.css"

export const Route = createFileRoute('/more')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <p className={style.title}>Дополнительные сервисы</p>
    </div>
  )
}
