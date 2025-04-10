import { Text } from "@chakra-ui/react";
import { MessageProps } from "../../types/props";
import { color } from "../../styles/colors";

export function MessageBox({ role, content }: MessageProps) {
  return (
    <>
      {role == "assistant" ? (
        <Text
          marginBlock={"3"}
          rounded={"2xl"}
          textAlign={"left"}
          paddingLeft={"5"}
          paddingRight={"5"}
          paddingTop={"3"}
          paddingBottom={"4"}
          maxW={"400px"}
          w={"fit-content"}
          color={color.GRAY_100}
          bg={color.GRAY_75}
          display={"block"}
        >
          {content}
        </Text>
      ) : (
        <Text
          marginLeft="auto"
          p={4}
          marginBlock={"3"}
          rounded={"2xl"}
          textAlign={"right"}
          paddingLeft={"5"}
          paddingRight={"5"}
          paddingTop={"3"}
          paddingBottom={"4"}
          maxW={"400px"}
          w={"fit-content"}
          bg={color.ACCENT}
          color={"white"}
          display={"block"}
        >
          {content}
        </Text>
      )}
    </>
  );
}
