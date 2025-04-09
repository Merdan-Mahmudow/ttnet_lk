import { For, Grid, GridItem, HStack, Input, Text } from "@chakra-ui/react";
import { Schedule } from "../../types/types";
import { withMask } from "use-mask-input";
import { useState } from "react";
import { fixTime } from "../../hooks/tools";

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
        <Grid gap={"1em"}>
            <For each={editableSchedule}>
                {(item, index) => (
                    <GridItem key={index}>
                        <HStack
                            justifyContent={"space-around"}>
                            <Text>{item.day}</Text>
                            <Input
                                maxW={"5em"}
                                ref={withMask("99:99")}
                                value={item.timer.from}
                                onChange={(e) => handleRawChange(index, "from", e.target.value)}
                                onBlur={() => handleBlur(index, "from")}
                            />

                            <Input
                                maxW={"5em"}
                                ref={withMask("99:99")}
                                value={item.timer.to}
                                onChange={(e) => handleRawChange(index, "to", e.target.value)}
                                onBlur={() => handleBlur(index, "to")}
                            />
                        </HStack>
                    </GridItem>
                )}
            </For>
        </Grid>
    )
}