import React, { useState } from 'react'

const AddStudent = () => {

    const[image,setImage] = useState("");
    const[studentInfo,setStudentInfo] = useState({
        name:"",
        email:"",
        grade:""
    })
    function handleInput(e){
        console.log(e.target.name,e.target.value);
        setStudentInfo({...studentInfo,[e.target.name]:e.target.value});
    }


    async function handleSubmit(event){
        const {name,email,grade} = studentInfo;
        //if()
        event.preventDefault();
        const formData = new FormData();
        formData.append("image",image);
        formData.append("name")
    }
  return (
    <div>
        <form action="">
            <p>Upload Image</p>
            <input type="file" accept='*/image' onChange={(e)=>{
                console.log(e.target.files)
                setImage(e.target.files[0])}
                }/>
            <p>Name: </p>
            <input name="name" type="text" onChange={(e)=>handleInput(e)}/>
            <p>Grade: </p>
            <input type="text" name='grade' onChange={(e)=>handleInput(e)} />
            <p>Email: </p>
            <input type="email" name='email' onChange={(e)=>handleInput(e)}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default AddStudent