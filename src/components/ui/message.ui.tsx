import { Text } from "@chakra-ui/react"
import { MessageProps } from "../../types/props"
import { color } from "../../styles/colors"


export function MessageBox ({ role, content }: MessageProps) {
    return (
        <>
            {role == "assistant" ? 
            <Text textAlign={"left"} maxW={"400px"} color={"white"} bg={color.GRAY_100}>{content}</Text>
        : <Text textAlign={"right"} bg={color.ACCENT} color={"white"}>{content}</Text>}        
        </>
    )
}