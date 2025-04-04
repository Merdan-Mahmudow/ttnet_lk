import { HumanIcon } from "../../assets/icons";
import { color } from "../../styles/colors";
import { UserProfileProps } from "../../types/props";
import { Circle } from "../ui/circle.ui";
import style from "./index.module.css"
import Image from "../ui/image.ui";
import { TextField } from "../ui/input.ui";
import {
    Button,
    CloseButton,
    Dialog,
    Grid,
    Portal,
    Field,
    Box,
    GridItem,
    Input,
    Text,
    Table
} from "@chakra-ui/react"
import {
    PasswordInput
} from "../../components/ui/password-input"
import {
    IoEyeOffSharp,
    IoEyeSharp
} from "react-icons/io5";
// @ts-ignore
import { withMask } from "use-mask-input"
import { toaster, Toaster } from "../ui/toaster";

export default function ProfileComponent({ user }: UserProfileProps) {
    if (!user.history) return
    const handleSave = () => {
        return toaster.create({
            type: "success",
            title: "Данные успншно сохранены!"
        })
    }
    const handleSavePass = () => {
        return toaster.create({
            type: "success",
            title: "Пароль обновлен!"
        })
    }
    const hasAvatar = false
    return (
        <div className={style.user_content}>
            <div className={style.img_name}>
                {hasAvatar ?
                    <Image src={user.avatar} alt={"ProfileLogo"} radius="50%" width="100" height="100" />
                    : <Circle fill={color.ACCENT} padding="13px 13px">
                        <HumanIcon fill="white" width="60" height="60" />
                    </Circle>}
                <h2 className={style.user_name}>{user.name}</h2>
            </div>
            <Grid
                templateColumns={"repeat1(2, 1fr)"}
                gap={"1.5em"}>
                <GridItem>
                    <TextField
                        type="phone"
                        placeholder="+7 (999) 999-99-99"
                        className={style.phoneInput}
                        labelClassName={style.phoneInputLabel}
                        label="" value={user.phone} onChange={() => false} disabled />
                </GridItem>
                <GridItem>
                    <TextField
                        type="text"
                        label="Адрес: "
                        className={style.addressInput}
                        placeholder="Масницкая 13с3"
                        labelClassName={style.addressInputLabel}
                        value={user.connection_address} disabled />
                </GridItem>
                <GridItem>
                    <Dialog.Root
                        placement={"center"}
                        motionPreset="slide-in-bottom"
                    >
                        <Dialog.Trigger asChild>
                            <Button
                                variant="outline"
                                bg={color.ACCENT}
                                borderRadius={"full"}
                                outline={"none"}
                                border={"none"}
                                marginBottom={"20px"}
                                _hover={{
                                    bg: color.ACCENT_HOVER
                                }}>Изменить данные</Button>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content
                                    color={"black"}
                                    bg={"white"}>
                                    <Dialog.Header>
                                        <Dialog.Title>Изменение данных</Dialog.Title>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        <Field.Root orientation="horizontal" marginBottom={'10px'}>
                                            <Field.Label>Номер телефона</Field.Label>
                                            <Input
                                                _hover={{
                                                    borderColor: "blue.500",
                                                    boxShadow: "0 0 0 1px blue.500"
                                                }}
                                                placeholder="+7 (123) 456-78-90" flex="1" ref={withMask("+7 (999) 999-99-99")} />
                                        </Field.Root>

                                        <Field.Root orientation="horizontal">
                                            <Field.Label>Адрес</Field.Label>
                                            <Input
                                                _hover={{
                                                    borderColor: "blue.500",
                                                    boxShadow: "0 0 0 1px blue.500"
                                                }}
                                                placeholder="Город, улица, дом" flex="1" />
                                        </Field.Root>
                                    </Dialog.Body>
                                    <Dialog.Footer>
                                        <Dialog.ActionTrigger asChild>
                                            <Button
                                                color={"white"}
                                                bg={color.ERROR}
                                                borderRadius={"full"}
                                                _hover={{
                                                    bg: color.ERROR_HOVER
                                                }}>Отмена</Button>
                                        </Dialog.ActionTrigger>
                                        <Dialog.ActionTrigger asChild>
                                            <Button
                                                type="submit"
                                                color={"white"}
                                                bg={color.ACCENT}
                                                borderRadius={"full"}
                                                _hover={{
                                                    bg: color.ACCENT_HOVER
                                                }}
                                                onClick={handleSave}>Сохранить</Button>
                                        </Dialog.ActionTrigger>
                                    </Dialog.Footer>
                                    <Dialog.CloseTrigger asChild>
                                        <CloseButton
                                            size="sm"
                                            color={"black"}
                                            _hover={{
                                                bg: color.ACCENT,
                                                color: 'white'
                                            }} />
                                    </Dialog.CloseTrigger>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>
                </GridItem>
            </Grid>

            <Box>
                <Field.Root>
                    <Field.Label
                        color={color.ACCENT}
                        fontWeight={"normal"}
                        fontFamily={"Roboto"}>Пароль</Field.Label>
                    <PasswordInput
                        border={"none"}
                        color={"black"}
                        bg={color.GRAY_25}
                        visibilityIcon={{
                            on: <IoEyeSharp fill="black" />,
                            off: <IoEyeOffSharp fill="black" />
                        }}
                        disabled
                        defaultValue={user.password} />

                    <Dialog.Root
                        placement={"center"}
                        motionPreset="slide-in-bottom"
                    >
                        <Dialog.Trigger asChild>
                            <Button
                                variant="outline"
                                bg={color.ACCENT}
                                borderRadius={"full"}
                                outline={"none"}
                                border={"none"}
                                marginBottom={"20px"}
                                _hover={{
                                    bg: color.ACCENT_HOVER
                                }}>Сменить пароль</Button>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content
                                    color={"black"}
                                    bg={"white"}>
                                    <Dialog.Header>
                                        <Dialog.Title>Смена пароля</Dialog.Title>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        <Field.Root>
                                            <Field.Label>Старый пароль</Field.Label>
                                            <PasswordInput
                                                _hover={{
                                                    borderColor: "blue.500",
                                                    boxShadow: "0 0 0 1px blue.500"
                                                }}
                                                textAlign={"center"}
                                                visibilityIcon={{
                                                    on: <IoEyeSharp fill="black" />,
                                                    off: <IoEyeOffSharp fill="black" />
                                                }} />
                                        </Field.Root>
                                        <Field.Root>
                                            <Field.Label>Новый пароль</Field.Label>
                                            <PasswordInput
                                                _hover={{
                                                    borderColor: "blue.500",
                                                    boxShadow: "0 0 0 1px blue.500"
                                                }}
                                                textAlign={"center"}
                                                visibilityIcon={{
                                                    on: <IoEyeSharp fill="black" />,
                                                    off: <IoEyeOffSharp fill="black" />
                                                }}
                                            />
                                        </Field.Root>
                                        <Field.Root>
                                            <Field.Label>Подтверждение пароля</Field.Label>
                                            <PasswordInput
                                                _hover={{
                                                    borderColor: "blue.500",
                                                    boxShadow: "0 0 0 1px blue.500"
                                                }}
                                                textAlign={"center"}
                                                visibilityIcon={{
                                                    on: <IoEyeSharp fill="black" />,
                                                    off: <IoEyeOffSharp fill="black" />

                                                }} />
                                        </Field.Root>

                                    </Dialog.Body>
                                    <Dialog.Footer>
                                        <Dialog.ActionTrigger asChild>
                                            <Button
                                                color={"white"}
                                                bg={color.ERROR}
                                                borderRadius={"full"}
                                                _hover={{
                                                    bg: color.ERROR_HOVER
                                                }}>Отмена</Button>
                                        </Dialog.ActionTrigger>
                                        <Dialog.ActionTrigger asChild>
                                            <Button
                                                type="submit"
                                                color={"white"}
                                                bg={color.ACCENT}
                                                borderRadius={"full"}
                                                _hover={{
                                                    bg: color.ACCENT_HOVER
                                                }}
                                                onClick={handleSavePass}>Сохранить</Button>
                                        </Dialog.ActionTrigger>
                                    </Dialog.Footer>
                                    <Dialog.CloseTrigger asChild>
                                        <CloseButton
                                            size="sm"
                                            color={"black"}
                                            _hover={{
                                                bg: '#036336',
                                                color: 'white'
                                            }} />
                                    </Dialog.CloseTrigger>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>
                </Field.Root>
            </Box>
            <Box>
                <Text>История входов</Text>

                <Box padding={"3"} bg={color.GRAY_50} borderRadius={"xl"}>
                    <Table.Root size="sm">
                        <Table.Body>
                            {user.history.map((item, id) => (
                                <Table.Row key={id} bg={"transparent"}>
                                    <Table.Cell border={"none"}>Дата</Table.Cell>
                                    <Table.Cell border={"none"}>{item.datetime}</Table.Cell>
                                    <Table.Cell border={"none"}>IP</Table.Cell>
                                    <Table.Cell border={"none"} textAlign="end">{item.ip}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Box>
            </Box>
            <Toaster />
        </div>
    )
}