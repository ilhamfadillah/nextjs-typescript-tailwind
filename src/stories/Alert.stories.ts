import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./Alert";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const RedAlert: Story = {
  args: {
    data: [
      {
        message: "error 1"
      },
      {
        message: "error 2"
      },
      {
        message: "error 3"
      }
    ]
  }
};