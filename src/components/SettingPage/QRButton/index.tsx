import {
  Box,
  Button,
  CloseButton,
  Code,
  Dialog,
  Portal,
  QrCode,
  Clipboard,
  VStack,
} from "@chakra-ui/react";
import { color } from "../../../styles/colors";

export const QRDialogComponent = () => {
  const QRCodeData = "9569864358";

  return (
    <Box // ----------   E I G H T H     -------------  //
      display="flex"
      justifyContent="center"
      width={["vw", "100%", "100%"]}
      p={4}
    >
      <Dialog.Root placement={"center"} motionPreset="slide-in-bottom">
        <Dialog.Trigger asChild>
          <Button
            bg={color.ACCENT}
            color={"white"}
            rounded={"full"}
            size={"lg"}
            _hover={{
              bg: color.ACCENT_HOVER,
            }}
          >
            Показать QR код
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content bg={"white"} color={"black"}>
              <Dialog.Header>
                <Dialog.Title fontSize={["xl", "xl", "2xl"]} margin={"1"}>
                  QR-код
                </Dialog.Title>
              </Dialog.Header>
              <Dialog.Body justifyItems={"center"}>
                <QrCode.Root value={QRCodeData} size={"xl"}>
                  <QrCode.Frame>
                    <QrCode.Pattern />
                  </QrCode.Frame>
                </QrCode.Root>
                <VStack>
                  <Code
                    variant={"subtle"}
                    size="lg"
                    mt={"1em"}
                    letterSpacing={"2px"}
                    bg={color.GRAY_50}
                    color={color.GRAY_100}
                  >
                    {QRCodeData}
                  </Code>
                  <Clipboard.Root value={QRCodeData} timeout={1000}>
                    <Clipboard.Trigger asChild>
                      <Button bg={color.ACCENT} color={"white"} size={"2xs"}>
                        <Clipboard.Indicator />
                        <Clipboard.CopyText />
                      </Button>
                    </Clipboard.Trigger>
                  </Clipboard.Root>
                </VStack>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button
                    bg={color.ERROR}
                    color={"white"}
                    rounded={"full"}
                    _hover={{ bg: color.ERROR_HOVER }}
                  >
                    Отмена
                  </Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton
                  size="sm"
                  color={"black"}
                  _hover={{ bg: color.GRAY_25 }}
                  rounded={"full"}
                />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );
};
