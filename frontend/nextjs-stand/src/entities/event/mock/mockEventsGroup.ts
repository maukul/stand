
import { incrementalNumber, rand, randFullName, randFutureDate, seed } from "@ngneat/falso";
import { EventGroupDateModel, EventModel } from "../type";
import { addMonths, eachDayOfInterval, subMonths } from "date-fns";

type MockEventsGroupParams = {
    seedValue?: string;
};

export const mockEventsGroup = ({seedValue}: MockEventsGroupParams = {}): EventGroupDateModel[] => {
    seed(seedValue ?? "mock_event_group");

    const startDate = subMonths(new Date(), 2);
    const endDate = addMonths(new Date(), 3);

    const mocks = [] as EventGroupDateModel[]

    for (const date of eachDayOfInterval({start: startDate, end: endDate})) {
        const events = [];
        for (let i = 8; i < rand([9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]); i++) {
            events.push({
                id: incrementalNumber()(),
                date: date.toString(),
                hour: i,
                user: {
                    firstName: randFullName(),
                    secondName: randFullName(),
                },
            });
        }
        mocks.push({
            date: date.toString(),
            events,
        });
    }

    

    return mocks;
}