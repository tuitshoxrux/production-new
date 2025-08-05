import React from 'react';
import 'app/styles/index.scss';
import type { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'entities/Counter';

export const StoreDecorator =
    // @ts-ignore
    (state: DeepPartial<StateSchema>) => (Story: StoryFn, context) =>
        (
            <StoreProvider initialState={state}>
                {Story(context.args, context)}{' '}
            </StoreProvider>
        );
