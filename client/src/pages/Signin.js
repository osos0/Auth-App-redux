import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux-rtk/slices/user-slice";
import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
  const [valueSignin, setValueSignin] = useState({});
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handelsignin = (e) => {
    setValueSignin({ ...valueSignin, [e.target.id]: e.target.value });
  };

  // console.log(valueSignin);

  const handelSubmite = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      // rtk here
      dispatch(signInStart());

      const fetchres = await axios.post(
        "http://localhost:5000/api/user/signin",
        valueSignin
      );
      // setLoading(false);
      // rtk here
      dispatch(signInSuccess(fetchres));
      // condition of navigate to home page
      if (!fetchres.data.message) navigate("/");
      else window.alert(`${fetchres.data.message}`);
    } catch (error) {
      // setLoading(false);
      // setError(false);
      // rtk
      dispatch(signInFailure(error));
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
        <Link to="/signup">. SIGN UP</Link>
      </div>
    </>
  );
};

export default Signin;
