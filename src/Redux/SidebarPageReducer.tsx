import {ActionsType, SideBarPropsType} from "./store";

type initialStateSideBarType = SideBarPropsType


let initialState: initialStateSideBarType = {
    friends: [
        {id: 1, friendName: 'Olya', avatar: ''},
        {id: 2, friendName: 'Alesya', avatar: ''},
        {id: 3, friendName: 'Lena', avatar: ''},
    ]
}


export const sidebarPageReducer = (state: SideBarPropsType = initialState, action: ActionsType) => {



    return state
}
