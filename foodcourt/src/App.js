import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Help from "../src/pages/Help"
import Menu from "../src/pages/Menu"
import NotFound from "../src/pages/PageNotFound"
import Contact from "../src/pages/Contact"
import SignUp from "../src/pages/signup"

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/help" element={<Help></Help>}></Route>
          <Route path="/Menu" element={<Menu></Menu>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
