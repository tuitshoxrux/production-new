import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title some title',
        text: 'Text some text',
    },
};

export const Error: Story = {
    args: {
        title: 'Title some title',
        text: 'Text some text',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title some title',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Text some text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title some title',
        text: 'Text some text',
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark: Story = {
    args: {
        title: 'Title some title',
    },
};

onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark: Story = {
    args: {
        text: 'Text some text',
    },
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
