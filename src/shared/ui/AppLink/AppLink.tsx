import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { FC, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const { to, className, theme, children, ...otherProps } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
