import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
  email: "",
  password: "",
  });
  useEffect(() => {
  let token = localStorage.getItem("token")
  if(token) navigate("/dashboard");
  },[]);
  function handleInputChange(e) {
  setValues((oldValues) => ({
  ...oldValues,
  [e.target.name]: e.target.value,
  }))
  }
  async function handleLogin(e) {
  e.preventDefault();
  try {
    let { data } = await axios.get("/auth", values);
    let {token} = data;
    localStorage.setItem("token", token);
    toast("Logindan o'tdingiz", {type: "success"})
    navigate("/dashboard");
  } catch (error) {
    toast(error.response.data.errors[0].msg, { type: "error"})
  }
  }
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <form onSubmit={handleLogin} className="w-50 bg-white border rounded p-5 shadow d-flex flex-column gap-3">
        <h1 className="text-center">Login</h1>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={values.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className='btn btn-danger w-100'>Login</button>
        <div className='d-flex text-center gap-3'>
        <p>No account yet?</p>
        <Link className='link-danger text-decoration-none' to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;