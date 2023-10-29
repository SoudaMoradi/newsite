import React from 'react';
import {Button} from "primereact/button";
import {Avatar} from "primereact/avatar";
import {useContext} from "./SidebarContex";


function SidebarItem({label,onClick,description}) {
    return(
        <div onClick={onClick} className="flex align-items-center gap-2 p-2 cursor-pointer">
            <Avatar size="large"/>
            <div className="flex flex-column">
                <span className="font-bold">{label}</span>
                <span className="text-gray-500">{description}</span>
            </div>

        </div>
    )

}


function Sidebar(props) {

    let {dispatch} = useContext();



    return (
        <div className="w-3 h-full bg-yellow-400">
            <SidebarItem label={'خانه'} onClick={()=>{dispatch({type:"HOME"})}}/>
            <SidebarItem label={'مشتریان'} description={'لیست مشتریان وفادار'} onClick={()=>{dispatch({type:"CUSTOMER"})}}/>
            <SidebarItem label={'فروشگاه'} description={'فروش محصولات تخفیف دار'} onClick={()=>{dispatch({type:"SHOP"})}}/>
            <SidebarItem label={'خروج'}/>
        </div>
    );
}

export default Sidebar;