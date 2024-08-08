import { useBreakpoint } from "@/shared/hooks";
import { addDays, eachDayOfInterval, subDays } from "date-fns";
import { useMemo, useState } from "react";

export const EventPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const breakpoint = useBreakpoint();
    const showDays = useMemo(() => {
        let showDays = 7;
        if (breakpoint === "sm") showDays = 3;
        if (breakpoint === "md") showDays = 5;

        return showDays;
    }, [breakpoint]);

    const showDates = useMemo(() => {
        const showDatesAfterAndBefore = (showDays - 1) / 2
        const startDay = subDays(currentDate, showDatesAfterAndBefore);
        const endDay = addDays(currentDate, showDatesAfterAndBefore);

        return eachDayOfInterval({
            start: startDay,
            end: endDay
          });
    }, [breakpoint, currentDate]);

    return (
     
    );
}