import './App.css';
import Sidebar from "./pages/Sidebar";
import React, {useState} from "react";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Customers from "./pages/Customers";

function App() {
    const {state, dispatch} = useHome();

    const pages={
        HOME:<Home/>,
        CUSTOMERS:<Customers/>,
        SHOP:<Shop/>//salam///
    }
  return (
      <div className="flex h-screen">
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          {pages[currentPage]}
      </div>
  );
}

export default App;
