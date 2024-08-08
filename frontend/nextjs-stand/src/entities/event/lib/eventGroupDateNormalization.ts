import { EventGroupDate, EventGroupDateModel } from "../type";
import { eventNormalization } from "./eventNormalization";

export const eventGroupDateNormalization = (event: EventGroupDateModel): EventGroupDate => {
    return {
        date: new Date(event.date),
        events: event.events.map(eventNormalization)
    }
}
