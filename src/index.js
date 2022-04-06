import React from "react";
import App from './App'
import { createRoot } from 'react-dom/client';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./components/reducers";
const root = createRoot(document.getElementById('root'));
const store = createStore(reducers)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);