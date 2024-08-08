import { Event, EventEmpty } from "../type";

export const isEmptyEvent = (event: Event | EventEmpty): event is EventEmpty => {
    return !('id' in event);
}

export const isEvent = (event: Event | EventEmpty): event is Event => {
    return 'id' in event
}
