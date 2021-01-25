import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import  {StateType} from "./redux/store";
import store from "./redux/redux-store";
import {Provider, StoreContext} from "./StoreContext";

let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            {/*<App store={store} state={state} dispatch={store.dispatch.bind(store)} />*/}
            <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
