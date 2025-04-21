import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage"
import React from 'react'

const AllRoutings = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
    </Routes>
  )
}

export default AllRoutings