import { Badge, Box, Flex, Stack, Link, Text, Table, HStack, Input } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { color } from '../styles/colors'
import { Transaction } from '../types/types'
import { useFilteredTransactions } from '../hooks/tools'
import { withMask } from 'use-mask-input'

export const Route = createFileRoute('/balance')({
  component: RouteComponent,
})

function RouteComponent() {
  const items: Transaction[] = [
    { id: 1, datetime: "12.10.2024 16:54", description: "Пополнение", price: 999.99 },
    { id: 2, datetime: "05.11.2024 12:10", description: "Оплата услуг", price: -200.00 },
    { id: 3, datetime: "25.11.2024 09:30", description: "Пополнение", price: 500.00 },
    { id: 4, datetime: "10.12.2024 18:45", description: "Возврат", price: 150.00 },
    { id: 5, datetime: "20.12.2024 20:12", description: "Покупка пакета", price: -300.00 },
    { id: 6, datetime: "03.01.2025 08:00", description: "Пополнение", price: 1000.00 },
    { id: 7, datetime: "14.01.2025 14:40", description: "Оплата услуг", price: -250.00 },
    { id: 8, datetime: "30.01.2025 17:15", description: "Покупка ТВ", price: -350.00 },
    { id: 9, datetime: "01.02.2025 10:10", description: "Пополнение", price: 1200.00 },
    { id: 10, datetime: "15.02.2025 11:50", description: "Оплата интернета", price: -600.00 },
    { id: 11, datetime: "25.02.2025 16:30", description: "Возврат", price: 100.00 },
    { id: 12, datetime: "02.03.2025 09:00", description: "Пополнение", price: 800.00 },
    { id: 13, datetime: "12.03.2025 13:00", description: "Списание бонусов", price: -100.00 },
    { id: 14, datetime: "21.03.2025 20:20", description: "Оплата подписки", price: -150.00 },
    { id: 15, datetime: "28.03.2025 21:45", description: "Пополнение", price: 1300.00 },
    { id: 16, datetime: "05.04.2025 10:10", description: "Покупка пакета", price: -500.00 },
    { id: 17, datetime: "08.04.2025 18:00", description: "Пополнение", price: 700.00 },
    { id: 18, datetime: "12.04.2025 12:00", description: "Оплата услуг", price: -200.00 },
    { id: 19, datetime: "15.04.2025 15:15", description: "Пополнение", price: 450.00 },
    { id: 20, datetime: "01.05.2024 09:00", description: "Старое пополнение", price: 300.00 },
    { id: 21, datetime: "01.06.2024 10:30", description: "Старое списание", price: -100.00 },
    { id: 22, datetime: "12.07.2024 14:45", description: "Бонус", price: 50.00 },
    { id: 23, datetime: "20.08.2024 11:30", description: "Пополнение", price: 800.00 },
    { id: 24, datetime: "01.09.2024 16:00", description: "Списание", price: -400.00 },
    { id: 25, datetime: "15.10.2024 19:00", description: "Подарок", price: 100.00 },
    { id: 26, datetime: "23.11.2024 22:10", description: "Платеж", price: -350.00 },
    { id: 27, datetime: "02.12.2024 13:00", description: "Пополнение", price: 600.00 },
    { id: 28, datetime: "10.03.2025 10:00", description: "Возврат", price: 200.00 },
    { id: 29, datetime: "05.02.2025 09:45", description: "Списание", price: -300.00 },
    { id: 30, datetime: "18.04.2025 20:20", description: "Оплата услуг", price: -150.00 },
  ]
  const { from, to, setFrom, setTo, filtered, } = useFilteredTransactions(items);
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
          fontWeight={'700'}
          fontSize={"xl"}>Текущий баланс:
          <Badge
            fontFamily={'Roboto, Arial, sans-serif'}
            fontSize={"md"}
            ml={"2"}
            bg={color.GRAY_75}
            color={color.GRAY_100}
            borderRadius={"full"}
            px={"3"} py={"1"}>450.8$
          </Badge>
        </Text>
        <Link
          href='https://ttnet.ru/users/internet'
          bg={color.ACCENT}
          px={"5"}
          py={"2"}
          borderRadius={"full"}
          textDecor={"none"}>Пополнить</Link>
      </Flex>
      <Text color={color.ACCENT} fontWeight={"600"}>История платежей: </Text>
      <HStack mb={4}>
        <Input
          placeholder="От (MM.YYYY)"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          width="150px"
          ref={withMask("99.9999")}
        />
        <Input
          placeholder="До (MM.YYYY)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          width="150px"
          ref={withMask("99.9999")}
        />
      </HStack>
      <Box
        p={"2"}
        bg={color.GRAY_50}
        borderRadius={"xl"}>


        <Table.ScrollArea borderWidth="1px" rounded="md" height="30em">
          <Table.Root size="md" stickyHeader>
            <Table.Header>
              <Table.Row bg={color.GRAY_50}>
                <Table.ColumnHeader color={color.ACCENT} fontWeight="600">Дата</Table.ColumnHeader>
                <Table.ColumnHeader color={color.ACCENT} fontWeight="600">Сумма</Table.ColumnHeader>
                <Table.ColumnHeader color={color.ACCENT} fontWeight="600" textAlign="end">Описание</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filtered.map((item) => (
                <Table.Row key={item.id} bg={color.GRAY_50} margin="5px">
                  <Table.Cell border="none" bg={color.GRAY_50} color={color.GRAY_100}>
                    {item.datetime}
                  </Table.Cell>
                  <Table.Cell border="none" bg={color.GRAY_50} color={color.GRAY_100}>
                    {item.price}
                  </Table.Cell>
                  <Table.Cell border="none" bg={color.GRAY_50} textAlign="end" color={color.GRAY_100}>
                    {item.description}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>

      </Box>
    </Stack>
  )
}
