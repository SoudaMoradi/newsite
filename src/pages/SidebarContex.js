import {createContext, useContext, useReducer} from "react";


const SidebarContex = createContext(null);

const initializeState = {
    currentValue : 'Home',
    currentValue2 : 'SHOP',
    currentValue3: 'CUSTOMER',
}

const reducer = (state, action)=>{

    switch (action.type){
        case "HOME":
            state = {...state, currentValue: state.currentValue}
            break;
        case "SHOP":
            state = {...state, currentValue: state.currentValue2}
            break;
        case "CUSTOMER":
            state = {...state, currentValue: state.currentValue3}
            break;

        default: throw Error(`An unknown Action to sidebar Reducer ${state.type}`);
    }

    return state;
}

const sidebarProvider=({children})=>{
    let [state, dispatch] = useReducer(reducer, initializeState, ()=>initializeState);

    return(
        <SidebarContex.Provider value={{state, dispatch}}>
            {children}
        </SidebarContex.Provider>
    )
}

const useSidebar=()=>{
    let context = useContext(SidebarContex);
    if (!context){
        throw Error("useSidebar should be used inside sidebarProvider");
    }
    let {state, dispatch} = context;
    return {state, dispatch}
}








export {sidebarProvider, useContext};