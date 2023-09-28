import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Login } from '@/components/Login';

const meta = {
  title: 'Component/Form/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Login>;

export default meta;
type story = StoryObj<typeof meta>;

export const LoginPage: story = {};