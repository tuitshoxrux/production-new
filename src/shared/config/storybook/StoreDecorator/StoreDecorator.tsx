import React from 'react';
import 'app/styles/index.scss';
import type { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'entities/Counter';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>
    ) =>
    // @ts-ignore
    (Story: StoryFn, context) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                {Story(context.args, context)}{' '}
            </StoreProvider>
        );
