import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Type Text',
        value: '123123',
    },
};
