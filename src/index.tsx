import './index.css';
import {AppStateType, store} from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


/*let rerenderEntireTree = (props: AppStateType) => {*/
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    /*state={state}
                    dispatch={store.dispatch.bind(store)}*/
                />,
            </Provider>
        </BrowserRouter>,

        document.getElementById('root'));
/*}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});*/


