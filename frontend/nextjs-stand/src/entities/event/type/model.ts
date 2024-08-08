import { BrandBase } from "@/shared/type";
import { EventBrandId } from "./helper";

export type EventModel = {
    id: BrandBase<EventBrandId>
    date: string;
    hour: number;
    user: {
        firstName: string | null;
        secondName: string | null;
    } | null
}

export type EventGroupDateModel = {
    date: string;
    events: EventModel[];
}