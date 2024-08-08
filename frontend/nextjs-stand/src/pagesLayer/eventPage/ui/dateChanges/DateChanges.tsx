import { Button } from "@/shared/ui/vendor";
import { addDays, subDays } from "date-fns";

type DateChangesProps = {
    currentDate: Date;
    onDateChange: (date: Date) => void;
    showDays: number;
}

export const DateChanges = ({ currentDate, onDateChange, showDays }: DateChangesProps) => {
    const handleChange = (date: Date) => {
        onDateChange(date);
    };
    const tik = (showDays - 1) ;

    const handleBeforeWeek = () => {
        const date = subDays(currentDate, tik)
        handleChange(date);
    }
    const handleBeforeDay = () => {
        const date = subDays(currentDate, 1)
        handleChange(date);
    }
    const handleToday = () => handleChange(new Date());
    const handleNextWeek = () => {
        const date = addDays(currentDate, tik)
        handleChange(date);
    }
    const handleNextDay = () => {
        const date = addDays(currentDate, 1)
        handleChange(date);
    }
    return (
        <div className="flex gap-2">
            <Button size="sm" onClick={handleBeforeWeek}>Before week</Button>
            <Button size="sm" onClick={handleBeforeDay}>Before day</Button>
            <Button size="sm" onClick={handleToday}>Today</Button>
            <Button size="sm" onClick={handleNextDay}>Next day</Button>
            <Button size="sm" onClick={handleNextWeek}>Next week</Button>
        </div>
    );
    }