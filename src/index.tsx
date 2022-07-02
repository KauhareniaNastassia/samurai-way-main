import './index.css';
import {store, StorePropsType} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StatePropsType} from "./Redux/state";


let rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    )
    ;
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


