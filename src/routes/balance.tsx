import { Badge, Box, Flex, Stack, Link, Text, Table } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { color } from '../styles/colors'

export const Route = createFileRoute('/balance')({
  component: RouteComponent,
})

function RouteComponent() {
  const items = [
    { id: 1, date: "12.02.2025 16:54", description: "Пополнение", price: 999.99 },
    { id: 2, date: "13.02.2025 16:54", description: "Вывод средств", price: 49.99 },
    { id: 3, date: "14.02.2025 16:54", description: "Пополнение", price: 150.0 },
    { id: 4, date: "15.02.2025 16:54", description: "Пополнение", price: 799.99 },
    { id: 5, date: "16.02.2025 16:54", description: "Оплата тарифа", price: 199.99 },
  ]
  return (
    <Stack
      px={"7"}
      py={"12"}>
      <Flex
        w={"full"}
        alignItems={"center"}
        justifyContent={"space-between"}>
        <Text
          color={color.ACCENT}
          fontSize={"xl"}>Текущий баланс:
          <Badge
            fontSize={"md"}
            ml={"2"}
            bg={color.GRAY_75}
            color={"black"}
            borderRadius={"full"}
            px={"3"} py={"1"}>450.8$
          </Badge>
        </Text>
        <Link
          href='https://google.com'
          bg={color.ACCENT}
          px={"5"}
          py={"2"}
          borderRadius={"full"}
          textDecor={"none"}>Пополнить</Link>
      </Flex><Text>История платежей: </Text>
      <Box
        p={"2"}
        bg={color.GRAY_50}
        borderRadius={"3xl"}>

        <Table.Root size="sm">
          <Table.Header >
            <Table.Row bg={color.GRAY_50}>
              <Table.ColumnHeader color={"black"}>Дата</Table.ColumnHeader>
              <Table.ColumnHeader color={"black"}>Сумма</Table.ColumnHeader>
              <Table.ColumnHeader color={"black"} textAlign="end">Описание</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body
          >
            {items.map((item) => (
              <Table.Row key={item.id}
                bg={color.GRAY_50}
              >
                <Table.Cell
                  border={"none"}
                  bg={color.GRAY_75}
                  borderTopLeftRadius={"full"}
                  borderBottomLeftRadius={"full"}>{item.date}</Table.Cell>
                <Table.Cell
                  border={"none"}
                  bg={color.GRAY_75}>{item.price}</Table.Cell>
                <Table.Cell
                  border={"none"}
                  bg={color.GRAY_75}
                  textAlign="end"
                  borderTopRightRadius={"full"}
                  borderBottomRightRadius={"full"}>{item.description}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Stack>
  )
}
