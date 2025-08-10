import type { Meta, StoryObj } from '@storybook/react-webpack5';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

Primary.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '123' },
    }),
];

export const Error: Story = {
    args: {},
};

Error.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '123', error: 'ERROR' },
    }),
];

export const Loading: Story = {
    args: {},
};

Loading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];
