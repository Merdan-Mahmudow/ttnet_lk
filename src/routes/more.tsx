import { createFileRoute } from '@tanstack/react-router'
import style from "../styles/more.module.css"
import { WarnIcon } from '../assets/icons'
import { color } from '../styles/colors'
import { Circle } from '../components/ui/circle.ui'

export const Route = createFileRoute('/more')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={style.warn_message}>
      <Circle fill={color.ACCENT} padding="13px 13px">
        <WarnIcon fill="white" width="60" height="60" />
        </Circle>
      <h2 className={style.user_name}>В данный момент дополнительные сервисы недоступны, мы уведомим вас</h2>
    </div>
  )
}
