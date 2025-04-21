import React from 'react'

const StudentCard = ({name,email,grade,image}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{grade}</p>
        {
            image?<img src={image} alt="user-image" />:""
        }
    </div>
  )
}

export default StudentCard