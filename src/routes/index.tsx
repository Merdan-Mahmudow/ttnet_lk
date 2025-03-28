import { createFileRoute } from '@tanstack/react-router'
import { Circle } from '../components/ui/circle.ui'
import { color } from '../styles/colors'
import { ToolsIcon, HomeIcon, HumanIcon } from '../assets/icons'

export const Route: any = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <Circle fill='#036336'>
        <ToolsIcon fill={color.GRAY_75} width='20' height='20'/>
      </Circle>

      <Circle fill='#036336'>
        <HomeIcon fill={color.GRAY_25} width='20' height='20'/>
      </Circle>

      <Circle fill={color.GRAY_100}>
        <HumanIcon fill={color.ACCENT} width='20' height='20'/>
      </Circle>
    </div>
  )
}

