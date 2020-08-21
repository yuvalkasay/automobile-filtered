import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
  const [flag, setFlag] = useState(false);

  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginpassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then((res) => {
      console.log(res);
      if (res.data === "Successfully Authenticated") {
        setFlag(true);
      } else if (res.data === "No user exists") {
        setFlag(false);
      }
    });
  };
  if (flag) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h3>Log-in</h3>
      <input
        placeholder="username"
        onChange={(e) => setLoginUsername(e.target.value)}
      />
      <input
        placeholder="password"
        onChange={(e) => setLoginpassword(e.target.value)}
      />
      <button onClick={login}>Submit</button>
    </div>
  );
}

export default Login;
