import React from "react";
import App from './App'
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./components/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';


const root = createRoot(document.getElementById('root'));
const middleware = [thunk]
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);