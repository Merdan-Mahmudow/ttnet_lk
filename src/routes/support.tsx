import { createFileRoute } from "@tanstack/react-router";
import { Box, Button, Group, Input } from "@chakra-ui/react";
import { color } from "../styles/colors";
import { FlightIcon } from "../assets/icons/flight.svg";
import { FileIcon } from "../assets/icons/file.svg";
import { useSupport } from "../hooks/useSupport";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { MessageBox } from "../components/ui/message.ui";
import { MessageProps } from "../types/props";
import { Toaster } from "../components/ui/toaster";

export const Route = createFileRoute("/support")({
  component: RouteComponent,
});

function RouteComponent() {
  const { socket, isConnected } = useSupport();
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendData = () => {
    if (!socket || !isConnected || message.trim() === "") return;

    const newMessage: MessageProps = { role: "user", content: message };

    setMessages((prev) => [...prev, newMessage]);
    socket.send(JSON.stringify(newMessage));

    inputRef.current?.focus();
    setMessage("");
  };

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      try {
        const receivedMessage: MessageProps = JSON.parse(event.data);
        setMessages((prev) => [...prev, receivedMessage]);
      } catch (error) {
        console.error("Ошибка при разборе входящего сообщения:", error);
      }
    };
  }, [socket]);

  return (
    <Box padding={"20px"} display={"grid"} h={"full"}>
      <Box
        border={`${color.GRAY_75} 1px solid`}
        bg={color.GRAY_25}
        borderRadius={"xl"}
        w={"full"}
        h={"full"}
        display={"grid"}
        gridTemplateRows={"1fr 50px"}
        padding={"20px"}
      >
        <Box maxH="500px" overflowY="auto">
          {messages.map(({ role, content }, id) => (
            <MessageBox key={id} role={role} content={content} />
          ))}
        </Box>
        <Group attached w="full" padding={"0"}>
          <Input
            variant="subtle"
            ref={inputRef}
            flex="1"
            placeholder="Введите сообщение..."
            // boxShadow={"inset 0px 0px 3px 0px"}
            borderColor={"grey"}
            bg={color.GRAY_75}
            outline={"none"}
            color={"black"}
            value={message}
            onChange={handleChange}
            rounded="xl"
          />
          <Button variant="solid" bg={color.ACCENT}>
            <FileIcon fill="white" />
          </Button>
          <Button
            variant="solid"
            bg={color.ACCENT}
            onClick={sendData}
            rounded="xl"
          >
            <FlightIcon fill="white" />
          </Button>
        </Group>
      </Box>
      <Toaster />
    </Box>
  );
}
