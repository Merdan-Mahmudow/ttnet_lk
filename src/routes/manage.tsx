import { SimpleGrid, Stack, Box, Text, Editable, useEditable, Button } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { color } from '../styles/colors'
import { useState, ChangeEvent } from 'react'

export const Route = createFileRoute('/manage')({
  component: RouteComponent,
})

function RouteComponent() {
  const [ip, setIP] = useState<string>("65.432.54.14")
  const handleIPChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
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
    defaultValue: "Beeline_5G_F7575",
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
    defaultValue: "какойтопароль",
  })

  return (
    <Stack
      px={"10"}
      pt={"10"}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={"10"}
      >
        <Box
          p={4}>
          <Text>SSID:</Text>
          <Box>
            <Editable.RootProvider
              value={editableSSID}
              bg="gray.100"
              rounded={"md"}
              px={"2"}>
              <Editable.Preview
                _hover={{ bg: "transparent" }} />
              <Editable.Input />
            </Editable.RootProvider>
            {editableSSID.editing &&
              <Button
                bg={color.ACCENT}
                rounded={"full"}
                color={"white"}
                _hover={{
                  bg: color.ACCENT_HOVER
                }}>Сохранить</Button>
            }
          </Box>
        </Box>

        <Box // ----------   S E C O N D   -------------  //
          p={4}>
          <Text>IP адрес:</Text>
          <Box>
            <Editable.RootProvider
              value={editableIP}
              bg="gray.100"
              rounded={"md"}
              px={"2"}
            >
              <Editable.Preview
                _hover={{ bg: "transparent" }} />
              <Editable.Input />
            </Editable.RootProvider>
            {editableIP.editing &&
              <Button
                bg={color.ACCENT}
                rounded={"full"}
                color={"white"}
                _hover={{
                  bg: color.ACCENT_HOVER
                }}>Сохранить</Button>
            }
          </Box>
        </Box>


        <Box // ----------   T H I R D    -------------  //
          p={4}>
          <Text>Предпочитаемый DNS адрес:</Text>
          <Box>
            <Editable.RootProvider
              value={editableDNS}
              bg="gray.100"
              rounded={"md"}
              px={"2"}>
              <Editable.Preview
                _hover={{ bg: "transparent" }} />
              <Editable.Input />
            </Editable.RootProvider>
            {editableDNS.editing &&
              <Button
                bg={color.ACCENT}
                rounded={"full"}
                color={"white"}
                _hover={{
                  bg: color.ACCENT_HOVER
                }}>Сохранить</Button>
            }
          </Box>
        </Box>


        <Box // ----------   F O U R T H    -------------  //
          p={4}>
          <Text>Альтернативный DNS адрес:</Text>
          <Box>
            <Editable.RootProvider
              value={editableDNSA}
              bg="gray.100"
              rounded={"md"}
              px={"2"}>
              <Editable.Preview
                _hover={{ bg: "transparent" }} />
              <Editable.Input />
            </Editable.RootProvider>
            {editableDNSA.editing &&
              <Button
                bg={color.ACCENT}
                rounded={"full"}
                color={"white"}
                _hover={{
                  bg: color.ACCENT_HOVER
                }}>Сохранить</Button>
            }
          </Box>
        </Box>


        <Box // ----------   F I F T H    -------------  //

          p={4}>
          <Text>Пароль:</Text>
          <Box>
            <Editable.RootProvider value={editablePASS}
              bg="gray.100"
              rounded={"md"}
              px={"2"}>
              <Editable.Preview
                _hover={{ bg: "transparent" }} />
              <Editable.Input />
            </Editable.RootProvider>
            {editablePASS.editing &&
              <Button
                bg={color.ACCENT}
                rounded={"full"}
                color={"white"}
                _hover={{
                  bg: color.ACCENT_HOVER
                }}>Сохранить</Button>
            }
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
