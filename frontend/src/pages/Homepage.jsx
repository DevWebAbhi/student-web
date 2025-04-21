import React, { useEffect, useState } from 'react'

import axios from "axios";
import StudentCard from '../components/StudentCard';

const Homepage = () => {
    const [students,setStudents ] = useState([]);

async function getStudents(){


    try {
        console.log(import.meta.env.VITE_BASE_URL)
        const studentsData = await axios.get(`${import.meta.env.VITE_BASE_URL}/student`);
        console.log(studentsData)
        setStudents(studentsData.data.students);
    } catch (error) {
        console.log(error);
        alert("something went wrong while featching the students");
    }
}

    useEffect(()=>{
        getStudents();
    },[])


  return (
    <div>
        
        {
            students.map((ele)=>(
              <StudentCard 
              key={ele._id} 
              name={ele.name} 
              email={ele.email} 
              grade={ele.grade} 
              image={ele.image}
              />  
            ))
        }
    </div>
  )
}

export default Homepage