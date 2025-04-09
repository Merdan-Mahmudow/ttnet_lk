import { Box, Circle, Heading, HStack, Switch, Text, VStack } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { WifiIcon } from '../assets/icons'
import { useState } from 'react'
import { color } from '../styles/colors'
import { Schedule } from '../types/types'
import { ScheduleComponent } from '../components/Schedule'


export const Route = createFileRoute('/manage')({
  component: RouteComponent,
})



function RouteComponent() {
  const [isNetworkOpen, setIsNetworkOpen] = useState<boolean>(true)
  const [isSheduleOpen, setIsSheduleOpen] = useState<boolean>(false)
  const [isNetworkDisabled, setIsNetworkDisabled] = useState<boolean>(false)

  const scheduleData: Schedule[] = [
    { day: "Пн", timer: { from: "10:00", to: "22:00" } },
    { day: "Вт", timer: { from: "09:00", to: "21:00" } },
    { day: "Ср", timer: { from: "11:00", to: "23:00" } },
    { day: "Чт", timer: { from: "10:00", to: "22:00" } },
    { day: "Пт", timer: { from: "12:00", to: "23:59" } },
    { day: "Сб", timer: { from: "10:00", to: "22:00" } },
    { day: "Вс", timer: { from: "00:00", to: "23:59" } }
  ]

  const handleScheduleChange = () => {
    if (!isSheduleOpen) {
      setIsNetworkOpen(false)
      setIsNetworkDisabled(!isNetworkDisabled)
    } else {
      setIsNetworkDisabled(!isNetworkDisabled)
    }

    setIsSheduleOpen(!isSheduleOpen)
  }
  return (
    <VStack
      width={["vw", "100%", "100%"]}
      alignItems={"center"}
      maxH={"full"}
      px={{ base: "1em", md: "2em", lg: "4em" }}
      pt={{ base: "1em", md: "2em" }}
      pb={{ base: "1em" }}>
      <HStack>
        <Circle
          bg={isNetworkOpen ? color.ACCENT : color.ERROR}
          p={".5em"}>
          <WifiIcon width='25' height='25' fill='white' />
        </Circle>
        <Text 
          fontWeight={"600"}
          fontSize={"20px"}>Интернет {isNetworkOpen ? "включён" : "выключен"}</Text>
        <Switch.Root
          disabled={isNetworkDisabled}
          size={"lg"}
          colorPalette={"green"}
          onCheckedChange={() => setIsNetworkOpen(!isNetworkOpen)}
          checked={isNetworkOpen}>
          <Switch.HiddenInput />
          <Switch.Control >
          </Switch.Control>
          <Switch.Label />
        </Switch.Root>
      </HStack>

      <HStack marginBottom={"10px"}>
        <Text
          fontWeight={"600"}
          fontSize={"20px"}>{isSheduleOpen ? "Выключить" : "Включить"} расписание</Text>
        <Switch.Root
          size={"lg"}
          colorPalette={"green"}
          onCheckedChange={handleScheduleChange}>
          <Switch.HiddenInput />
          <Switch.Control >
          </Switch.Control>
          <Switch.Label />
        </Switch.Root>
      </HStack>


      {
        isSheduleOpen &&
        <Box>
          <Heading 
            textAlign={"center"} 
            fontSize={"22px"} 
            fontWeight={"700"} 
            marginBottom={"5px"}
            color={color.ACCENT}>Расписание </Heading>
          <Box bg={color.GRAY_50}
          rounded={"xl"} 
          maxW={"90vw"}
          minW={"60%"}>

          <ScheduleComponent schedule={scheduleData} />
        </Box>
        </Box>
      }

    </VStack >
  )
}
