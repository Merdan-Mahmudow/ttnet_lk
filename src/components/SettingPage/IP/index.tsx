import { Box, Editable, IconButton, useEditable, Text } from "@chakra-ui/react";
import { useState } from "react";
import { LuPencilLine, LuX, LuCheck } from "react-icons/lu";
import { color } from "../../../styles/colors";
import { validateIP } from "../../../hooks/tools";

export const IPEditableComponent = () => {
    const [ip, setIp] = useState<string>("65.232.54.14");
    const [isValidIP, setIsValidIP] = useState<boolean | null>(null);
  
    const editable = useEditable({
        defaultValue: ip
    })
    return (
              <Box display="flex" justifyContent="center" width="100%">
                <Box // ----------   S E C O N D   -------------  //`
                  p={4}>
                  <Text
                    color={color.ACCENT}
                    fontWeight={700}
                    marginBottom={'5px'}
                    fontSize={"lg"}>IP адрес:</Text>
                  <Box>
                    <Editable.Root
                      defaultValue={editable.value}
                      value={ip}
                      onValueChange={(e) => {
                        setIp(e.value);
                        setIsValidIP(validateIP(ip));
                      }}
                      size={"lg"}>
                      <Editable.Preview bg={color.GRAY_50} _hover={{ bg: color.GRAY_75 }} minWidth={"300px"} />
                      <Editable.Input
                        outlineColor={isValidIP ? color.ACCENT : color.ERROR}
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