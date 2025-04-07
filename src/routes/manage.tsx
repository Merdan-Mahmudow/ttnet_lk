import { SimpleGrid, Stack, Box, Text, Editable, useEditable, Button, IconButton } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { color } from '../styles/colors'
import { useState } from 'react'
import { LuPencilLine, LuX, LuCheck } from 'react-icons/lu'
import { validateIP } from '../hooks/tools'

export const Route = createFileRoute('/manage')({
  component: RouteComponent,
})

function RouteComponent() {
  const [ip, setIp] = useState<string>("65.232.54.14");
  const [isValidIP, setIsValidIP] = useState<boolean | null>(null);


  const editableSSID = useEditable({
    defaultValue: "Beeline_5G_F7575",
  })
  const editableIP = useEditable({
    defaultValue: "65.432.54.14",
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
            <Editable.Root
              value={editableSSID.value}>
              <Editable.Preview _hover={{ bg: "transparent" }} />
              <Editable.Input />
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <IconButton bg={color.ACCENT} color={"white"} size="xs">
                    <LuPencilLine />
                  </IconButton>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                  <IconButton bg={color.ACCENT} color={"white"} size="xs">
                    <LuX />
                  </IconButton>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <IconButton bg={color.ACCENT} color={"white"} size="xs">
                    <LuCheck />
                  </IconButton>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable.Root>
          </Box>
        </Box>

        <Box // ----------   S E C O N D   -------------  //
          p={4}>
          <Text>IP адрес:</Text>
          <Box>
            <Editable.Root 
            defaultValue={editableIP.value}
            value={ip}
            onValueChange={(e) => {
              setIp(e.value);
              setIsValidIP(validateIP(ip));
              } }>
              <Editable.Preview _hover={{ bg: "transparent" }} />
              <Editable.Input outlineColor={isValidIP ? color.ACCENT : color.ERROR}/>
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <IconButton bg={color.ACCENT} color={"white"} size="xs">
                    <LuPencilLine />
                  </IconButton>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                  <IconButton bg={color.ACCENT} color={"white"} size="xs">
                    <LuX />
                  </IconButton>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <IconButton bg={color.ACCENT} color={"white"} size="xs">
                    <LuCheck />
                  </IconButton>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable.Root>
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
