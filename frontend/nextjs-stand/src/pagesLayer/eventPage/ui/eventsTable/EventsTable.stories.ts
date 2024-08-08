import type { Meta, StoryObj } from '@storybook/react';
import { fn,  } from '@storybook/test';
import { EventsTable } from './EventsTable';
import { mockEventsGroup } from '@/entities/event/mock/mockEventsGroup';
import { eventGroupDateNormalization } from '@/entities/event/lib';
import { addDays, eachDayOfInterval, subDays } from 'date-fns';


const meta = {
  title: 'EventsTable',
  component: EventsTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EventsTable>;

export default meta;
type Story = StoryObj<typeof meta>;


const startDate = subDays(new Date(), 2);
const endDate = addDays(new Date(), 3);

export const EventsTableData: Story = {
  args: { 
    dates: eachDayOfInterval({start: startDate, end: endDate}),
    eventsGroupDate: mockEventsGroup().map(eventGroupDateNormalization),
    onCreateEvent: fn(),
    onSelect: fn(),
   },
};