import { useState } from "react";
import Navigation from "./components/Navigation";
import ToDoList from "./pages/ToDoList";   
import CheckRadio from "./pages/CheckRadio";   
import { Routes, Route } from "react-router-dom"; 
import { publicRoutes } from "./routes";


function App() {
  const Func = publicRoutes[1].element
  // Return UI
  return <div className="App"> 
    <Navigation /> 
    <Routes>  
      { 
      publicRoutes.map((item, index) => (
        <Route key={index} path={item.path} element={ <item.element /> }/> 
      ))
      }
    </Routes>
  </div>;
}

export default App;
