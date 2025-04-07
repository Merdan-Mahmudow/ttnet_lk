import { SimpleGrid, Stack, Box, Text, Editable, useEditable, IconButton, Link, Button, CloseButton, Dialog, Portal, QrCode, Code } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { color } from '../styles/colors'
import { useState } from 'react'
import { LuPencilLine, LuX, LuCheck } from 'react-icons/lu'
import { validateIP } from '../hooks/tools'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  const [ip, setIp] = useState<string>("65.232.54.14");
  const [isValidIP, setIsValidIP] = useState<boolean | null>(null);

const handleDownload = () => {
  const link = document.createElement('a')
  link.href = '/youtube.py'
  link.download = 'youtube.py'
  link.target = '_blank'
  link.click()
}

  const editableSSID = useEditable({
    defaultValue: "Merdan_7G-MEGA-NET",
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
    defaultValue: "SuperStrongPass",
  })

  const QRCodeData = "9569864358"

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
            <Editable.Root value={editableSSID.value}>
              <Editable.Preview bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"170px"} />
              <Editable.Input
                maxWidth={"400px"}
                _selection={{ bg: color.GRAY_50, color: "black" }} />
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
            <Editable.Root
              defaultValue={editableIP.value}
              value={ip}
              onValueChange={(e) => {
                setIp(e.value);
                setIsValidIP(validateIP(ip));
              }}>
              <Editable.Preview bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"170px"} />
              <Editable.Input
                outlineColor={isValidIP ? color.ACCENT : color.ERROR}
                maxWidth={"400px"}
                _selection={{ bg: color.GRAY_50, color: "black" }} />
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
              <Editable.Preview bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"170px"} />
              <Editable.Input
                maxWidth={"400px"}
                _selection={{ bg: color.GRAY_50, color: "black" }} />
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
              <Editable.Preview bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"170px"} />
              <Editable.Input
                maxWidth={"400px"}
                _selection={{ bg: color.GRAY_50, color: "black" }} />
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
              <Editable.Preview bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"170px"} />
              <Editable.Input type='password'
                maxWidth={"400px"}
                _selection={{ bg: color.GRAY_50, color: "black" }} />
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


        <Box // ----------   S E V E N T H     -------------  //
          p={4}>
          <Button
            bg={color.ACCENT}
            color={"white"}
            rounded={"full"}
            _hover={{
              bg: color.ACCENT_HOVER
            }}
            onClick={handleDownload}>Скачать настройки</Button>
        </Box>


        <Box // ----------   E I G H T H     -------------  //
          p={4}>
          <Dialog.Root
            placement={"center"}
            motionPreset="slide-in-bottom"
            size={"xs"}
          >
            <Dialog.Trigger asChild>
              <Button
                bg={color.ACCENT}
                color={"white"}
                rounded={"full"}
                _hover={{
                  bg: color.ACCENT_HOVER
                }}>Показать QR код</Button>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content
                  bg={"white"}
                  color={"black"}>
                  <Dialog.Header>
                    <Dialog.Title>QR-код</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body justifyItems={"center"}>
                    <QrCode.Root value={QRCodeData}>
                      <QrCode.Frame>
                        <QrCode.Pattern />
                      </QrCode.Frame>
                    </QrCode.Root>
                    <Code variant={"subtle"} size="md" mt={"1em"} letterSpacing={"2px"}>{QRCodeData}</Code>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button bg={color.ERROR} color={"white"} rounded={"full"}>Отмена</Button>
                    </Dialog.ActionTrigger>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" color={"black"} _hover={{bg: "transparent"}}/>
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        </Box>

      </SimpleGrid>
    </Stack>
  )
}
