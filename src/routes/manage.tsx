import { SimpleGrid, Stack, Box, Text, Editable, useEditable, IconButton } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { color } from '../styles/colors'
import { useState, ChangeEvent } from 'react'
import { LuPencilLine, LuX, LuCheck } from 'react-icons/lu'

export const Route = createFileRoute('/manage')({
  component: RouteComponent,
})

function RouteComponent() {
  const [ip, setIP] = useState<string>("65.432.54.14")
  const handleIPChange = (e: any) => {
    const raw = e
    const cleaned = raw.replace(/[^\d.]/g, '')

    const parts = cleaned.split(".")
    const limitParts: string[] = []

    for (let i = 0; i < parts.length && i < 4; i++) {
      let part = parts[i]
      if (part.length > 3) part = part.slice(0, 3);

      let num = parseInt(part, 10)

      if (!isNaN(num)) {
        if (num > 255) num = 255;
        part = num.toString()
      }
      limitParts.push(part)
    }
    const final = limitParts.join('.')
    setIP(final)
  }
  const editableSSID = useEditable({
    defaultValue: "Merdan_7G-MEGA-NET",
  })
  const editableIP = useEditable({
    defaultValue: ip,
  })
  const editableDNSA = useEditable({
    defaultValue: "8.8.4.4",
  })
  const editableDNS = useEditable({
    defaultValue: "8.8.8.8",
  })
  const editablePASS = useEditable({
    defaultValue: "SuperStrongPass",
  })

  return (
    <Stack
      px={"10"}
      pt={"10"}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={"5"}
      >
        <Box
          p={4}>
          <Text 
            color={color.ACCENT}
            fontWeight={700}
            marginBottom={'5px'}>SSID:</Text>
          <Box>
            <Editable.Root defaultValue={editableSSID.value}>
              <Editable.Preview  bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"170px"}/>
              <Editable.Input 
                maxWidth={"400px"} 
                _selection={{ bg: color.GRAY_50, color: "black"}}/>
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuPencilLine />
                  </IconButton>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuX />
                  </IconButton>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuCheck />
                  </IconButton>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable.Root>
          </Box>
        </Box>

<Box // ----------   S E C O N D   -------------  //`
          p={4}>
          <Text
            color={color.ACCENT}
            fontWeight={700}
            marginBottom={'5px'}>IP адрес:</Text>
          <Box>
          <Editable.Root defaultValue={editableIP.value}>
          <Editable.Preview  bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"170px"}/>
              <Editable.Input 
                maxWidth={"400px"} 
                _selection={{ bg: color.GRAY_50, color: "black"}}/>
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuPencilLine />
                  </IconButton>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuX />
                  </IconButton>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuCheck />
                  </IconButton>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable.Root>
          </Box>
        </Box>


        <Box // ----------   T H I R D    -------------  //
          p={4}>
          <Text
            color={color.ACCENT}
            fontWeight={700}
            marginBottom={'5px'}>Предпочитаемый DNS адрес:</Text>
          <Box>
          <Editable.Root defaultValue={editableDNSA.value}>
          <Editable.Preview  bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"170px"}/>
              <Editable.Input 
                maxWidth={"400px"} 
                _selection={{ bg: color.GRAY_50, color: "black"}}/>
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuPencilLine />
                  </IconButton>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuX />
                  </IconButton>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuCheck />
                  </IconButton>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable.Root>
          </Box>
        </Box>


        <Box // ----------   F O U R T H    -------------  //
          p={4}>
          <Text
            color={color.ACCENT}
            fontWeight={700}
            marginBottom={'5px'}>Альтернативный DNS адрес:</Text>
          <Box>
          <Editable.Root defaultValue={editableDNS.value}>
          <Editable.Preview  bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"170px"}/>
              <Editable.Input 
                maxWidth={"400px"} 
                _selection={{ bg: color.GRAY_50, color: "black"}}/>
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuPencilLine />
                  </IconButton>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuX />
                  </IconButton>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuCheck />
                  </IconButton>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable.Root>
          </Box>
        </Box>


        <Box // ----------   F I F T H    -------------  //

          p={4}>
          <Text
            color={color.ACCENT}
            fontWeight={700}
            marginBottom={'5px'}>Пароль:</Text>
          <Box>
          <Editable.Root defaultValue={editablePASS.value}>
          <Editable.Preview  bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"170px"}/>
              <Editable.Input 
                maxWidth={"400px"} 
                _selection={{ bg: color.GRAY_50, color: "black"}}/>
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuPencilLine />
                  </IconButton>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuX />
                  </IconButton>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="xs">
                    <LuCheck />
                  </IconButton>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable.Root>
          </Box>
        </Box>


        <Box // ----------   S I X T H    -------------  //
          p={4}>
          <Text></Text>
        </Box>

      </SimpleGrid>
    </Stack>
  )
}
