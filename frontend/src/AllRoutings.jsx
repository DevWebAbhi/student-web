import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage"
import React from 'react'
import AddStudent from "./pages/AddStudent";

const AllRoutings = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/addStudent" element={<AddStudent/>}/>
    </Routes>
  )
}

export default AllRoutings