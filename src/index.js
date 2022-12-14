import React from "react";
import { createRoot } from "react-dom/client";
import App from './app';

createRoot(
    document.querySelector('[data-js="app"]'))
    .render(<React.StrictMode>
        <App />
        </React.StrictMode>
    );
