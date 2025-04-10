import {
  Stack,
  Text,
  HStack,
  Button,
  Heading,
  RadioGroup,
  Grid,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { color } from "../styles/colors";

const initialItems = [
  {
    label: "Provider A",
    value: "1",
    price: "200",
    isAviable: true,
    speed: 100,
  },
  {
    label: "Provider B",
    value: "2",
    price: "300",
    isAviable: false,
    speed: 100,
  },
  {
    label: "Provider C",
    value: "3",
    price: "200",
    isAviable: false,
    speed: 100,
  },
  {
    label: "Provider D",
    value: "4",
    price: "200",
    isAviable: false,
    speed: 100,
  },
];

export const Route = createFileRoute("/more")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [providers, setProviders] = useState(initialItems);

  const selectedProvider = providers.find(
    (provider) => provider.value === selectedValue
  );

  const handleConfirm = () => {
    if (!selectedValue) return;

    setProviders((prevProviders) =>
      prevProviders.map(
        (provider) =>
          provider.value === selectedValue
            ? { ...provider, isAviable: true }
            : { ...provider, isAviable: false } // Сбрасываем isAviable для остальных
      )
    );
  };

  return (
    <Stack
      gap={"5"}
      width={["vw", "100%", "100%"]}
      alignItems={"center"}
      maxH={"full"}
      px={{ base: "1em", md: "2em", lg: "4em" }}
      pt={{ base: "1em", md: "2em" }}
      pb={{ base: "1em" }}
    >
      <Heading fontSize={"3xl"}>Интернет провайдер</Heading>
      <HStack>
        <Text fontSize={["ms", "lg", "lg"]} fontWeight={"600"}>
          Выбранный провайдер:
        </Text>
        <Text
          fontSize={["ms", "lg", "lg"]}
          color={color.ACCENT}
          fontWeight={"600"}
        >
          {providers.find((provider) => provider.isAviable)?.label}
        </Text>
      </HStack>
      <Heading fontSize={"2xl"}>Выбор провайдера</Heading>
      <Grid templateColumns={"repeat1(2, 1fr)"} gap={"1.5em"}>
        <RadioGroup.Root
          variant={"solid"}
          size={["md", "lg", "lg"]}
          colorPalette={"teal"}
          value={selectedValue}
          onValueChange={(e) => setSelectedValue(e.value)}
        >
          <HStack gap="6">
            {initialItems.map((item) => (
              <RadioGroup.Item key={item.value} value={item.value}>
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </HStack>
        </RadioGroup.Root>
      </Grid>
      <VStack>
        <HStack>
          <Text fontSize={["ms", "lg", "lg"]} fontWeight={"600"}>
            {selectedProvider?.label}:
          </Text>
          <Text
            fontSize={["ms", "lg", "lg"]}
            fontWeight={"600"}
            color={
              selectedProvider && selectedProvider.isAviable == true
                ? color.ACCENT
                : color.ERROR
            }
          >
            {selectedProvider && selectedProvider.isAviable == true
              ? "Подключено"
              : "Не подключено"}
          </Text>
        </HStack>
        <HStack>
          <Text fontSize={["ms", "lg", "lg"]} fontWeight={"600"}>
            Скорость:
          </Text>
          <Text fontSize={["ms", "lg", "lg"]}>
            {selectedProvider?.speed} Mb/s
          </Text>
        </HStack>
        <Button
          size={["md", "lg", "lg"]}
          variant="outline"
          bg={color.ACCENT}
          borderRadius={"full"}
          outline={"none"}
          border={"none"}
          marginBottom={"20px"}
          _hover={{
            bg: color.ACCENT_HOVER,
          }}
          onClick={handleConfirm}
          // isDisabled={selectedProvider?.isAviable}
          disabled={!selectedValue || selectedProvider?.isAviable}
        >
          {selectedProvider?.isAviable ? "Выбрано" : "Подтвердить"}
        </Button>
      </VStack>
    </Stack>
  );
}
