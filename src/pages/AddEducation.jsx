import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddEducation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const[values, setValues] = useState({
  school: " ",
  degree: " ",
  fieldofstudy: " ",
  from: " ",
})
async function handleInputChange(e) {
setValues(oldValues => ({
...oldValues,
[e.target.name]: e.target.value
}))
}
function handleDeleateAccount() {
  let confirmation = confirm(
    "Ma'lumotlaringiz o'chib ketishiga rozimisiz? Unda o'chiraman!!"
  );
  if (confirmation) {
    toast("Hamma narsayiz o'chirildi", { type: "info" });
    axios.delete("api/profile");
    navigate("/");
  }
}
async function handleSubmit(e) {
e.preventDefault();
try {
  let {data} = await axios.put("/api/profile/education", values)
  toast("Education Added Successfully", {type: "success"});
  dispatch(AddEducation(data))
  navigate("/dashboard")
} catch (error) {
  toast("Nimadir neto ketdi", {type: "error"})
  console.log(error);
}
}
  return (
    <div>
      <header className="bg-white border-bottom shadow sticky-top">
        <div className="container  py-3 d-flex align-items-center justify-content-between">
          <Link
            className="display-6 text-decoration-none text-danger flex-row gap-3 align-items-center"
            to="/"
          >
            Jobify
          </Link>
          <ul className="navbar-nav flex-row gap-3 align-items-center">
            <li className="nav-item">
              <Link className="text-reset text-decoration-none" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-reset text-decoration-none" to="/my-jobs">
                My Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-reset text-decoration-none" to="/jobs">
                Explore
              </Link>
            </li>
            <li className="nav-item ">
              <button onClick={handleDeleateAccount} className="btn btn-danger">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </header>
      <div className="py-5">
        <div className="container">
          <button className="btn btn-danger mb-3">Go Back</button>
          <h1>Add Experience</h1>
          <form>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="school" className="form-label">
                  School
                </label>
                <input
                  type="text"
                  name="school"
                  id="school"
                  className="form-control"
                  placeholder="Stanford"
                  value={values.school}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="degree" className="form-label">
                  Degree
                </label>
                <input
                  type="text"
                  name="degree"
                  id="degree"
                  className="form-control"
                  placeholder="Master"
                  value={values.degree}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="from" className="form-label">
                  Data
                </label>
                <div className="input-grup d-flex">
                  <input
                    type="date"
                    name="from"
                    id="from"
                    className="form-control"
                    value
                  />
                  <span className="input-group-text">To</span>
                  <input
                    type="date"
                    name="to"
                    id="to"
                    className="form-control"
                    value={values.from}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
                <div className="row g-5">
                  <div className="offset-6 col-6">
                    <input
                      type="checkbox"
                      name="current"
                      id="current"
                      value="true"
                    />
                    <label htmlFor="current" className="form-label ps-3">
                      Current
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label class="form-label" for="fieldofstudy">
                  Field of study
                </label>
                <input
                  type="text"
                  name="fieldofstudy"
                  id="fieldofstudy"
                  className="form-control"
                  placeholder="Computer Scrience"
                  value={values.fieldofstudy}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="decription" className="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="5"
                  class="form-control"
                  placeholder="Tell us a little about the experience"
                ></textarea>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-danger w-100 mt-3"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEducation;
