import type { Meta, StoryObj } from '@storybook/react';

import InputText from '@/components/InputText';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Component/Input',
  component: InputText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Email: Story = {
  args: {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "email@email.com",
    label: "Email"
  },
};

export const Text: Story = {
  args: {
    type: "text",
    id: "username",
    name: "username",
    placeholder: "username",
    label: "Username"
  },
};

export const Password: Story = {
  args: {
    type: "password",
    id: "password",
    name: "password",
    placeholder: "*******",
    label: "Password"
  },
};
