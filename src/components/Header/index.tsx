import style from "./index.module.css";
import KeyImage from "../../assets/img/key.png";
import { WalletIcon } from "../../assets/icons";
import { color } from "../../styles/colors";
import { Circle as CustomCircle } from "../ui/circle.ui";
import { Link } from "@tanstack/react-router";
import { BurgerIcon } from "../../assets/icons/burger.svg";
import { AsideProps } from "../../types/props";
import {
  Circle,
  Float,
  Icon,
  Span,
  Portal,
  CloseButton,
  Dialog,
  IconButton,
  For,
  Card,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";

interface TNotifyCard {
  title: string;
  description: string;
}

export function Header({
  isMobile,
  title,
  toggleAside,
}: AsideProps & { toggleAside: () => void }) {
  const notifications: TNotifyCard[] = [
    {
      title: "Новый заказ",
      description: "Поступил новый заказ №348 от клиента Иван П.",
    },
    { title: "Заказ готов", description: "Заказ №346 готов к выдаче в зале." },
    {
      title: "Клиент отменил заказ",
      description: "Клиент отменил заказ №345. Проверьте детали в системе.",
    },
    {
      title: "Обновление меню",
      description: "Добавлена новая позиция: Пицца «Барбекю XXL».",
    },
    {
      title: "Окончание смены",
      description: "Смена сборщика №2 завершится через 30 минут.",
    },
    {
      title: "Нет ингредиентов",
      description: "Закончился сыр моцарелла. Обновите склад.",
    },
  ];

  return (
    <header className={style.header}>
      <div className={style.first} style={{ backgroundColor: color.ACCENT }}>
        <img src={KeyImage} alt="KeyImage" className={style.key} />
        <h1>Личный кабинет</h1>
        <Dialog.Root size={isMobile ? "full" : "md"}>
          <Dialog.Trigger asChild>
            <IconButton
              position="relative"
              bg={"transparent"}
              size={"2xl"}
              _hover={{ bg: color.ACCENT_HOVER }}
              rounded={"full"}
            >
              <Float offsetY={"5"} offsetX={"5"}>
                <Circle
                  fontSize={"sm"}
                  size={"4"}
                  bg={"#cc3429"}
                  color={"white"}
                >
                  <Span>{notifications.length}</Span>
                </Circle>
              </Float>
              <Icon as={FaBell} boxSize={8} fill={"white"} />
            </IconButton>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content bg={"white"} color={"black"} rounded={"xl"}>
                <Dialog.Header
                  bg={color.ACCENT}
                  color={"white"}
                  borderTopRadius={"xl"}
                >
                  <Dialog.Title>Уведомления</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                  <Stack>
                    <For each={notifications}>
                      {(item, index) => (
                        <Card.Root
                          size={"sm"}
                          key={index}
                          bg={color.GRAY_50}
                          border={"none"}
                        >
                          <Card.Header>
                            <Heading size={"md"} color={color.ACCENT}>
                              {item.title}
                            </Heading>
                          </Card.Header>
                          <Card.Body color={"black"}>
                            {item.description}
                          </Card.Body>
                        </Card.Root>
                      )}
                    </For>
                  </Stack>
                </Dialog.Body>
                <Dialog.CloseTrigger asChild>
                  <CloseButton
                    size="md"
                    rounded={"full"}
                    _hover={{ bg: color.ACCENT_HOVER }}
                  />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </div>
      <div className={style.second}>
        <div className={style.balance}>
          <Link to="/balance" className={style.link}>
            <CustomCircle fill={color.ACCENT} padding="10px 10px">
              <WalletIcon fill="white" width="30" height="30" />
            </CustomCircle>
            <span className={style.title} style={{ color: color.ACCENT }}>
              Баланс:{" "}
            </span>
            <span className={style.price}>450 €</span>
          </Link>
        </div>
        <div className={style.balance}>
          <span className={style.title} style={{ color: color.ACCENT }}>
            Тариф:{" "}
          </span>
          <span className={style.price}>750 €</span>
        </div>
      </div>
      <div>
        <p className={style.pageName}>
          <button
            className={style.burger}
            style={{ display: isMobile ? "block" : "none" }}
            onClick={toggleAside}
          >
            <BurgerIcon width="20" height="20" fill="white" />
          </button>
          {title}
        </p>
      </div>
    </header>
  );
}
