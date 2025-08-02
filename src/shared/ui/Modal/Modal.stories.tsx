import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        lazy: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique error vitae ipsam, facere aspernatur aut optio. Ullam harum nulla, a impedit perspiciatis delectus minus velit molestiae, dicta rerum eum tempore. Pariatur, debitis suscipit? Accusamus excepturi, magni suscipit, quaerat dolores fuga architecto esse numquam consequuntur dolor sed quos ex labore! Voluptatem!',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        lazy: true,

        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique error vitae ipsam, facere aspernatur aut optio. Ullam harum nulla, a impedit perspiciatis delectus minus velit molestiae, dicta rerum eum tempore. Pariatur, debitis suscipit? Accusamus excepturi, magni suscipit, quaerat dolores fuga architecto esse numquam consequuntur dolor sed quos ex labore! Voluptatem!',
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
