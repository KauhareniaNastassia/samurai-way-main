import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {store, StatePropsType, StorePropsType} from "./Redux/state";



export type AppPropsType = {
    store: StorePropsType
}


const App: React.FC<AppPropsType> = (props) => {
    /*const state = props.store.getState()*/

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile
                        profilePage={props.store._state.profilePage}//new
                        dispatch={props.store.dispatch.bind(props.store)}
                         //add props

                    /> }/>

                    <Route path={'/dialogs'}  render={() => <Dialogs dialogs = {store._state.dialogsPage.dialogs} messages={store._state.dialogsPage.messages}/> }/>

                    <Route path={'/news'}  render={() => <News /> }/>
                    <Route path={'/music'}  render={() => <Music /> }/>
                    <Route path={'/settings'}  render={() => <Settings /> }/>


                </div>
            </div>
        </BrowserRouter>);
}

export default App;

