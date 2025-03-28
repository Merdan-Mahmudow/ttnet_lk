import { createFileRoute } from '@tanstack/react-router'
import { Circle } from '../components/ui/circle.ui'
import { color } from '../styles/colors'
import { ToolsIcon, HomeIcon, HumanIcon, MessageIcon, WarnIcon, NotifyIcon, BrowserIcon, FileIcon, WifiIcon, WalletIcon } from '../assets/icons'
import { useState } from 'react'

export const Route: any = createFileRoute('/')({
  component: Index,
})

function Index() {

  const [isNotify, setIsNotify] = useState<boolean>()
  return (
    <div>
      <button onClick={() => isNotify ? setIsNotify(false) : setIsNotify(true)}>CLICK MEEEE!!!</button>
      <Circle fill={color.ACCENT}>
        <ToolsIcon fill={color.GRAY_75} width='20' height='20'/>
      </Circle>

      <Circle fill={color.ACCENT}>
        <HomeIcon fill={color.GRAY_25} width='20' height='20'/>
      </Circle>

      <Circle fill={color.GRAY_50}>
        <HumanIcon fill={color.ACCENT} width='20' height='20'/>
      </Circle>

      <Circle fill={color.ACCENT}>
        <MessageIcon fill={color.GRAY_25} width='20' height='20' rectFill={color.ACCENT}/>
      </Circle>

      <Circle fill={color.ACCENT}>
        <BrowserIcon fill={color.GRAY_25} width='20' height='20'/>
      </Circle>

      <Circle fill={color.ACCENT}>
        <WarnIcon fill={color.GRAY_25} width='20' height='20'/>
      </Circle>

      <Circle fill={color.ACCENT}>
        <NotifyIcon fill={color.GRAY_25} width='40' height='40' isNotify={isNotify}/>
      </Circle>

      <Circle fill={color.ACCENT}>
        <FileIcon fill={color.GRAY_25} width='20' height='20'/>
      </Circle>
      <Circle fill={color.ERROR}>
        <WifiIcon fill={color.GRAY_25} width='20' height='20'/>
      </Circle>
      <Circle fill={color.ACCENT}>
        <WalletIcon fill={color.GRAY_25} width='20' height='20'/>
      </Circle>
    </div>
  )
}

