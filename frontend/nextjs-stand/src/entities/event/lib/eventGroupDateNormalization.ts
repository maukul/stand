import { showHoursEvents } from "../const";
import { EventGroupDate, EventGroupDateModel } from "../type";
import { eventNormalization } from "./eventNormalization";

export const eventGroupDateNormalization = (event: EventGroupDateModel): EventGroupDate => {
    const events = [] as EventGroupDate['events'];
    const date = new Date(event.date);

    showHoursEvents.forEach(hour => {
        const findEvent = event.events.find(event => event.hour === hour);
        if(findEvent){
            events.push(eventNormalization(findEvent));
        } else {
            events.push({
                date,
                hour,
            });
        }
    })

    return {
        date,
        events,
    }
}
