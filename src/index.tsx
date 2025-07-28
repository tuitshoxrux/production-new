import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'app/providers/ThemeProvider';

const container = document.getElementById('root');

import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

if (container) {
    const root = createRoot(container);
    root.render(
        <div>
            <BrowserRouter>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </BrowserRouter>
        </div>
    );
}
