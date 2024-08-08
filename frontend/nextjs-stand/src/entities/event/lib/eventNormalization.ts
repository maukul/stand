import { Event, EventBrandId, EventModel } from "../type";

export const eventNormalization = (event: EventModel): Event => {
    return {
        id: event.id as EventBrandId,
        date: new Date(event.date),
        hour: event.hour,
        user: event.user
    }
}
