import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
<div className="App">
<BrowserRouter>
<ToastContainer />
  <NavBar />
  <div className="content-container">
   <Routes> 
       <Route path='/' element={<Home />}/>
       <Route path='/cart' element={<Cart />} />
       <Route path='/not-found' element={<NotFound />} /> 
       <Route path='*' element={<NotFound />} />
      </Routes>
  </div>
 </BrowserRouter>
 </div>
  );
};

export default App;
