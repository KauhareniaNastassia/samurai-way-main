import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {rerenderEntireTree} from "./render";
import {state} from "./Redux/state";


rerenderEntireTree(state)

