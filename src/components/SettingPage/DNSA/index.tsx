import { Box, Editable, IconButton, useEditable, Text } from "@chakra-ui/react";
import { LuPencilLine, LuX, LuCheck } from "react-icons/lu";
import { color } from "../../../styles/colors";

export const DNSAEditableComponent = () => {
  const editable = useEditable({
    defaultValue: "8.8.4.4"
  })
  return (
    <Box display="flex" justifyContent="center" width={["vw", "100%", "100%"]}>
      <Box // ----------   F O U R T H    -------------  //
        p={4}>
        <Text
          color={color.ACCENT}
          fontWeight={700}
          marginBottom={'5px'}
          fontSize={["md", "md", "lg"]}>Альтернативный DNS адрес:</Text>
        <Box>
          <Editable.Root defaultValue={editable.value}
            size={["sm", "md", "lg"]}>
            <Editable.Preview bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={["200px", "300px", "300px"]} />
            <Editable.Input
              maxWidth={["200px", "300px", "300px"]}
              _selection={{ bg: color.GRAY_50, color: "black" }} />
            <Editable.Control>
              <Editable.EditTrigger asChild>
                <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size={["sm", "md", "lg"]}>
                  <LuPencilLine />
                </IconButton>
              </Editable.EditTrigger>
              <Editable.CancelTrigger asChild>
                <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size={["sm", "md", "lg"]}>
                  <LuX />
                </IconButton>
              </Editable.CancelTrigger>
              <Editable.SubmitTrigger asChild>
                <IconButton _hover={{ bg: color.ACCENT_HOVER }} bg={color.ACCENT} color={"white"} size={["sm", "md", "lg"]}>
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