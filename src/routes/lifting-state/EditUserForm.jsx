import React, { useState } from "react";

const EditUserForm = (params) => {

    const [userData, SetUserdata] = useState(params.user)


    const handlerFormChange = (e) => {
    SetUserdata({...userData, [e.target.name]: e.target.value})
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log(userData)
        params.setEditMode((prevState) => !prevState)
        params.setUser(userData)
    }

return (
    <div className="container">
      <form className="login-form" onSubmit={(e)=>handlerSubmit(e)}>
        <label htmlFor="email">Username</label>
        <input type="text" onChange={(e)=>handlerFormChange(e)} value={userData.userName} name="userName" />
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e)=>handlerFormChange(e)} name="email" value={userData.email} />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e)=>handlerFormChange(e)} name="password" value={userData.password} />
        <button type="submit">Submit</button>
      </form>
      <h3>Username: {userData.userName}</h3>
      <h3>Email: {userData.email}</h3>
      <h3>Password: {userData.password}</h3>
    </div>
  );
};

export default EditUserForm;
