import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [valueSignin, setValueSignin] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handelsignin = (e) => {
    setValueSignin({ ...valueSignin, [e.target.id]: e.target.value });
  };

  // console.log(valueSignin);

  const handelSubmite = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const fetchres = await axios.post(
        "http://localhost:5000/api/user/signin",
        valueSignin
      );
      setLoading(false);

      // condition of navigate to home page
      if (!fetchres.data.message) navigate("/");
      else window.alert(`${fetchres.data.message}`);
    } catch (error) {
      setLoading(false);
      setError(false);
    }
  };
  return (
    <>
      <h3>Sign in</h3>
      <form onSubmit={handelSubmite}>
        <input
          id="email"
          type="email"
          placeholder="Email"
          onChange={handelsignin}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handelsignin}
        />
        <button disabled={error}>{loading ? "Loading..." : "Sign in"}</button>
      </form>
      <div className="d-flex p-4 ">
        <div>Don't Have an account ?..</div>
        <Link to="/signup">. SIGN IN</Link>
      </div>
    </>
  );
};

export default Signin;
