import { Box, Text,  Field,  For, Grid, GridItem, Heading, HStack, Input } from "@chakra-ui/react";
import { Schedule } from "../../types/types";
import { withMask } from "use-mask-input";
import { useState } from "react";
import { fixTime } from "../../hooks/tools";
import { color } from "../../styles/colors";
import { WifiIcon } from "../../assets/icons"; 

export function ScheduleComponent({ schedule }: { schedule: Schedule[] }) {
    const [editableSchedule, setEditableSchedule] = useState(schedule)

    const handleRawChange = (index: number, type: "from" | "to", value: string) => {
        const updated = [...editableSchedule];
        updated[index] = {
            ...updated[index],
            timer: {
                ...updated[index].timer,
                [type]: value,
            },
        };
        setEditableSchedule(updated);
    };

    const handleBlur = (index: number, type: "from" | "to") => {
        const raw = editableSchedule[index].timer[type];
        const fixed = fixTime(raw);

        if (fixed !== raw) {
            handleRawChange(index, type, fixed);
        }
    };
    return (
        <Grid gap={"1em"} p={"5"} >
            <For each={editableSchedule}>
                {(item, index) => (
                    <GridItem key={index}>
                        <HStack
                            align={"center"}
                            justifyContent={"space-around"}
                        >
                            <Heading size={["sm", "lg", "lg"]} color={color.ACCENT}>{item.day}:</Heading>
                            <Box>
                                <Field.Root orientation={"horizontal"}>
                                    <Input
                                        fontSize={["14px", "16px", "18px"]}
                                        textAlign={"center"}
                                        padding={"0px"}
                                        w={"7em"}
                                        border={"none"}
                                        bg={color.GRAY_75}
                                        rounded={"full"}
                                        ref={withMask("99:99")}
                                        value={item.timer.from}
                                        onChange={(e) => handleRawChange(index, "from", e.target.value)}
                                        onBlur={() => handleBlur(index, "from")}
                                    />
                                </Field.Root>
                            </Box>

                            <Box>
                                <Field.Root orientation={"horizontal"}>
                                <Input
                                    fontSize={["14px", "16px", "18px"]}
                                    textAlign={"center"}
                                    padding={"0px"}
                                    w={"7em"}
                                    border={"none"}
                                    bg={color.GRAY_75}
                                    rounded={"full"}
                                    ref={withMask("99:99")}
                                    value={item.timer.to}
                                    onChange={(e) => handleRawChange(index, "to", e.target.value)}
                                    onBlur={() => handleBlur(index, "to")}
                                />
                            </Field.Root>
                            </Box>
                        </HStack>
                    </GridItem>
                )}
            </For>
        </Grid>
    )
}