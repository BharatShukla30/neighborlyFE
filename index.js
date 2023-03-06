import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './src/App.js'
import configureStore from './src/redux/store.js';

const container = document.getElementById('root');
const root = createRoot(container);

const store = configureStore();

root.render(
    <BrowserRouter >
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);