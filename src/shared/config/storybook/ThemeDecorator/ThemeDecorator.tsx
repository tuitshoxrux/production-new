// src/shared/config/storybook/ThemeDecorator.tsx
import React from 'react';
import 'app/styles/index.scss';
import type { StoryFn } from '@storybook/react';
// @ts-ignore

export const ThemeDecorator = (theme: string) => (Story: StoryFn, context) =>
    <div className={`app ${theme}`}>{Story(context.args, context)} </div>;
