import { Event, EventEmpty } from "@/entities/event";
import { showHoursEvents } from "@/entities/event/const";
import { isEmptyEvent, isEvent } from "@/entities/event/lib";
import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/vendor";
import { formatDate, isSameDay } from "date-fns";
import { useMemo } from "react";


type DataEvent = Event | EventEmpty;

export type DataEventGroup = {
    date: Date;
    events: DataEvent[];
} 

type onCreateEventParams = {
    date: Date;
    hour: number;
}

type EventsTableProps = {
    dates: Date[];
    eventsGroupDate: DataEventGroup[];
    onCreateEvent: (params: onCreateEventParams) => void;
    onSelect: (event: DataEvent) => void;
}

export const EventsTable = ({dates, eventsGroupDate, onCreateEvent, onSelect}: EventsTableProps) => {
    const emptyDate = (event: Event | EventEmpty) => {
        if(isEmptyEvent(event)) {
            return true;
        }
        if(isEvent(event) && event.user === null) {
            return true;
        }
        return false;
    }

const dataTable = useMemo(() => {
    const data = [] as DataEvent[][];

    showHoursEvents.forEach(hour => {
        const eventsResult = [] as DataEvent[];
        dates.forEach(date => {
            const eventGroup = eventsGroupDate.find(eventGroupDate => isSameDay(eventGroupDate.date, date));
            if(eventGroup) {
                const event = eventGroup.events.find(event => event.hour === hour);
                if(event) {
                    eventsResult.push(event);
                }
            }
        })
        data.push(eventsResult);
    })

    return data;

}, [dates, eventsGroupDate])

    const handleOnCreateEvent = (params: EventEmpty) => {
        onCreateEvent(params);
    }
    const handleOnSelect = (event: DataEvent) => {
        onSelect(event);
    }

    return (
        <Table className="border">
        <TableHeader>
          <TableRow>
            {dates.map((date, index) => (
                <TableHead key={index} className="text-center border">
                    {formatDate(date, "EEEE dd.MM.yyyy")}
                </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
            {dataTable.map((events, index) => (
                <TableRow key={index}>
                    {events.map((event, index) => (
                        <TableCell key={index} className="p-1 border">
                            <div className="flex gap-2 items-center">
                                <div>
                                    <Button variant="link" size="sm" onClick={() => handleOnSelect(event)} disabled={emptyDate(event)}>
                                    {`${event.hour}:00`}
                                    </Button>
                                </div>
                                <div className="flex flex-col">
                                    {emptyDate(event) && (
                                        <Button variant="secondary" size="sm" onClick={() => handleOnCreateEvent(event)}>Create event</Button>
                                    )}
                                    {isEvent(event) && event.user && (
                                        <div className="flex flex-col justify-start">
                                            <p>{event.user.firstName}</p>
                                            <p>{event.user.secondName}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
      </Table>
    );
}