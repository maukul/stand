import { EventBrandId } from "./helper";

export type EventEmpty = {
    date: Date;
    hour: number;
}

export type Event = {
    id: EventBrandId
    date: Date;
    hour: number;
    user: {
        firstName: string | null;
        secondName: string | null;
    } | null
}

export type EventGroupDate = {
    date: Date;
    events: Event[];
}