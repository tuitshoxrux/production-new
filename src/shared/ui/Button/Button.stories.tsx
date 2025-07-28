import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Button, ButtonSize, BUttonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: BUttonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'Text',
        theme: BUttonTheme.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: BUttonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: BUttonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: BUttonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: BUttonTheme.OUTLINE,
    },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: BUttonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: BUttonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: BUttonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareL: Story = {
    args: {
        children: '>',
        theme: BUttonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareXL: Story = {
    args: {
        children: '>',
        theme: BUttonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
