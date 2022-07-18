import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {AppStateType} from "./Redux/redux-store";
import {UsersPage} from "./components/Users/UsersPage";
import {UsersPageContainer} from "./components/Users/UsersPageContainer";




/*export type AppPropsType = {
    //store: StorePropsType
    /!*state: AppStateType
    dispatch: (action: ActionsType) => void*!/
}*/


const App = () => {
    /*const state = props.store.getState()*/

    return (
        /*<BrowserRouter>*/
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'}
                           render={() => <Profile />
                       /* profilePage={props.state.profilePage}
                        dispatch={props.dispatch}*/
                    }/>

                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer
                        /*dialogsPage={props.state.dialogsPage}
                        dispatch={props.dispatch}*/
                    />}/>

                    <Route path={'/users'}
                           render={() =><UsersPageContainer />}
                    />

                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>)
        /*</BrowserRouter>);*/
}

export default App;

