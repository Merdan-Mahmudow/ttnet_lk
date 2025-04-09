import { Box,  Field,  For, Grid, GridItem, Heading, HStack, Input } from "@chakra-ui/react";
import { Schedule } from "../../types/types";
import { withMask } from "use-mask-input";
import { useState } from "react";
import { fixTime } from "../../hooks/tools";
import { color } from "../../styles/colors";

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
        <Grid gap={"1em"} p={"5"}>
            <For each={editableSchedule}>
                {(item, index) => (
                    <GridItem key={index}>
                        <HStack
                            justifyContent={"space-around"}
                        >
                            <Heading size={"md"} color={color.ACCENT}>{item.day}:</Heading>
                            <Box>
                                <Field.Root orientation={"horizontal"}>
                                    <Field.Label fontWeight={"normal"} pos={"relative"} left={"9"}> от: </Field.Label>
                                    <Input
                                        maxW={"9em"}
                                        border={"none"}
                                        bg={color.GRAY_75}
                                        ref={withMask("99:99")}
                                        value={item.timer.from}
                                        onChange={(e) => handleRawChange(index, "from", e.target.value)}
                                        onBlur={() => handleBlur(index, "from")}
                                    />
                                </Field.Root>
                            </Box>

                            <Box>
                                <Field.Root orientation={"horizontal"}>
                                <Field.Label fontWeight={"normal"} pos={"relative"} left={"9"} >до: </Field.Label>
                                <Input
                                    maxW={"9em"}
                                    border={"none"}
                                    bg={color.GRAY_75}
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