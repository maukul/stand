import { Button } from "@/shared/ui/vendor";

type DateChangesProps = {
    currentDate: Date;
    onDateChange: (date: Date) => void;
}

export const DateChanges = ({ currentDate, onDateChange }: DateChangesProps) => {
    const handleChange = (date: Date) => {
        onDateChange(date);
    };

    const handleBeforeWeek = () => {
        const date = new Date(currentDate);
        date.setDate(date.getDate() - 7);
        handleChange(date);
    }
    const handleBeforeDay = () => {
        const date = new Date(currentDate);
        date.setDate(date.getDate() - 1);
        handleChange(date);
    }
    const handleToday = () => handleChange(new Date());
    const handleNextWeek = () => {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + 7);
        handleChange(date);
    }
    const handleNextDay = () => {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + 1);
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