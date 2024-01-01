import React, { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [valueSignin, setValueSignin] = useState({});

  const handelsignin = (e) => {
    setValueSignin({ ...valueSignin, [e.target.id]: e.target.value });
  };

  console.log(valueSignin);

  const handelSubmite = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/user/signin", valueSignin);
    } catch (error) {}
  };
  return (
    <>
      <h3>Sign in</h3>
      <form onSubmit={handelSubmite}>
        <input
          id="username"
          type="text"
          placeholder="Username"
          onChange={handelsignin}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handelsignin}
        />
        <button>Sign in</button>
      </form>
    </>
  );
};

export default Signin;
