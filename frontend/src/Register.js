import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerpassword, setRegisterpassword] = useState("");

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerpassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    }).then((res) => console.log(res));
  };
  return (
    <div>
      <h3>Create account</h3>
      <input
        placeholder="username"
        onChange={(e) => setRegisterUsername(e.target.value)}
      />
      <input
        placeholder="password"
        onChange={(e) => setRegisterpassword(e.target.value)}
      />
      <button onClick={register}>Submit</button>
    </div>
  );
}

export default Register;
