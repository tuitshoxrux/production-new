import 'app/styles/index.scss';
import type { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router';

export const RouterDecorator = (story: StoryFn) => {
    // @ts-ignore

    return <BrowserRouter>{story()}</BrowserRouter>;
};
