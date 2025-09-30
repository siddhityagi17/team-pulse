import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import App from './App.jsx';
import { store } from './redux/store.js'; 
import './index.css'; 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App component with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);