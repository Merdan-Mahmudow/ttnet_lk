import { Box, Button, CloseButton, Code, Dialog, Portal, QrCode } from "@chakra-ui/react"
import { color } from "../../../styles/colors"

export const QRDialogComponent = () => {

    const QRCodeData = "9569864358"

    return (
        <Box // ----------   E I G H T H     -------------  //
            display="flex" justifyContent="center" width="100%"
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
                        size={"lg"}
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
                                <CloseButton size="sm" color={"black"} _hover={{ bg: "transparent" }} />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </Box>
    )
}