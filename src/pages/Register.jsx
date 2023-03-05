import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify"
const Register = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
    });
      useEffect(()=>{
    let token = localStorage.getItem('token')
    if (token) navigate("/dashboard")
  },[])


  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleRegister(e) {
    e.preventDefault();

    if (values.password !== values.confirmedPassword) {
      toast("Parolingiz xato!", { type: "error" });
      return
    }

    try {
      let {data} = await axios.post("api/users", values);
      let {token} = data;
      localStorage.setItem("token", token)

      toast("Registratsiyadan o'tdingiz", {type:"success"})
      navigate("/dashboard")
    } catch (error) {
      toast(error.response.data.errors[0].msg, {type:"error"});
    }
  }
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <form
        onSubmit={handleRegister}
        className="w-50 bg-white border rounded p-5 shadow d-flex flex-column gap-3"
      >
        <h1 className="text-center">Register</h1>
        <div>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={values.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Your email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            value={values.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={values.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmedPassword">Confirm password</label>
          <input
            type="password"
            name="confirmedPassword"
            id="confirmedPassword"
            className="form-control"
            value={values.confirmedPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="btn btn-danger w-100">Register</button>
        <div className="d-flex gap-3">
          <p>Already have an account?</p>
          <Link className="link-danger text-decoration-none" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register
