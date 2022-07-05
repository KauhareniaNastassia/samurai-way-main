import './index.css';
import {store} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StatePropsType} from "./Redux/state";


let rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <App
            state={store.getState()}
            store={store}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    )
    ;
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


