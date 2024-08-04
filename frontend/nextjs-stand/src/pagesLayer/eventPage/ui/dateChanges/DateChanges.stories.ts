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
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    currentDate: new Date(),
    onDateChange: fn()
   },
} satisfies Meta<typeof DateChanges>;

export default meta;
type Story = StoryObj<typeof meta>;


export const DateChangesButtons: Story = {};