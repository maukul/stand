
import { incrementalNumber, rand, randFullName, randFutureDate, seed } from "@ngneat/falso";
import { EventModel } from "../type";

type MockEventParams = {
    seedValue?: string;
    defaultValues?: Partial<EventModel>;
};

export const mockEvent = ({defaultValues, seedValue = "mock_event"}: MockEventParams): EventModel => {
    seed(seedValue);

    const mock:EventModel = {
        id: incrementalNumber()() ,
        date: randFutureDate().toString(),
        hour: rand([8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        user: {
            firstName: randFullName(),
            secondName: randFullName(),
        },
    }

    return {
        ...mock,
        ...defaultValues,
    };
}