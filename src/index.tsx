import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

const container = document.getElementById('root');

import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

if (container) {
    const root = createRoot(container);
    root.render(
        <StoreProvider>
            <BrowserRouter>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </BrowserRouter>
        </StoreProvider>
    );
}
