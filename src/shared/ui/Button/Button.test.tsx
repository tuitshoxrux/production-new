import { render, screen } from '@testing-library/react';
import { Button, BUttonTheme } from './Button';

describe('classNames', () => {
    test('Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Button class theme', () => {
        render(<Button theme={BUttonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
