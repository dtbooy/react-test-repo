import React, { useState } from "react";
import "../css/LoginForm.css";


const LoginForm = () => {
  //Set hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

  const handlerChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlerChangePassword = (event) => {
    setPassword(event.target.value);
  };

  function submitForm(event) {
    event.preventDefault();
    console.log(`Email: ${email}, password: ${password}`);
  }

  return (
    <div className="container">
      <form className="login-form" onSubmit={(e) => submitForm(e)}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => handlerChangeEmail(e)}
          placeholder="Enter Email"
          type="email"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => handlerChangePassword(e)}
          placeholder="Enter Password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
