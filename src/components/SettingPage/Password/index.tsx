import { Box, Editable, IconButton, useEditable, Text } from "@chakra-ui/react";
import { LuPencilLine, LuX, LuCheck } from "react-icons/lu";
import { color } from "../../../styles/colors";

export const PasswordEditableComponent = () => {
    const editable = useEditable({
        defaultValue: "SomeStrongPass"
    })
    return (
        <Box display="flex" justifyContent="center" width="100%">
            <Box // ----------   F I F T H    -------------  //

                p={4}>
                <Text
                    color={color.ACCENT}
                    fontWeight={700}
                    marginBottom={'5px'}
                    fontSize={"lg"}>Пароль:</Text>
                <Box>
                    <Editable.Root defaultValue={editable.value}
                        size={"lg"}>
                        <Editable.Preview bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"300px"} />
                        <Editable.Input type='password'
                            maxWidth={"300px"}
                            _selection={{ bg: color.GRAY_50, color: "black" }} />
                        <Editable.Control>
                            <Editable.EditTrigger asChild>
                                <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="lg">
                                    <LuPencilLine />
                                </IconButton>
                            </Editable.EditTrigger>
                            <Editable.CancelTrigger asChild>
                                <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="lg">
                                    <LuX />
                                </IconButton>
                            </Editable.CancelTrigger>
                            <Editable.SubmitTrigger asChild>
                                <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size="lg">
                                    <LuCheck />
                                </IconButton>
                            </Editable.SubmitTrigger>
                        </Editable.Control>
                    </Editable.Root>
                </Box>
            </Box>
        </Box>
    )
}