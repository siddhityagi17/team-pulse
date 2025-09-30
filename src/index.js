import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Corrected line, no extra character
import App from './App.jsx';
import { store } from './redux/store.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);