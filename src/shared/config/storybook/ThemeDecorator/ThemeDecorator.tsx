import React from 'react';
import 'app/styles/index.scss';
import type { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
// @ts-ignore

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn, context) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                {Story(context.args, context)}{' '}
            </div>
        </ThemeProvider>
    );
