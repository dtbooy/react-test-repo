import React from 'react'

const User = (params) => {

  return (
    <div>
      <div>
        <p><button onClick={()=>params.setEditMode((prevState) => !prevState)}>Edit</button></p>
      </div>
      <h3>Username: {params.user.userName}</h3>
      <h3>Email: {params.user.email}</h3>
    </div>
  )
}

export default User