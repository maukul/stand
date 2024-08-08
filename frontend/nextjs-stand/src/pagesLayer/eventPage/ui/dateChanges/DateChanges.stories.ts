import type { Meta, StoryObj } from '@storybook/react';
import { fn,  } from '@storybook/test';
import { DateChanges } from './DateChanges';


const meta = {
  title: 'DateChanges',
  component: DateChanges,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    currentDate: { control: 'date' },
    onDateChange: { action: 'date changed' },
  },
} satisfies Meta<typeof DateChanges>;

export default meta;
type Story = StoryObj<typeof meta>;


export const DateChangesButtons: Story = {
  args: {
    currentDate: new Date(),
    onDateChange: fn(),
    showDays: 7
  }
};