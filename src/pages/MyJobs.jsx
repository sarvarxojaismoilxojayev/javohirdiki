import React from 'react'
import { Link } from 'react-router-dom';
const MyJobs = () => {
  function handleDeleateAccount() {
  let confirmation = confirm(
    "Ma'lumotlaringiz o'chib ketishiga rozimisiz? Unda o'chiraman!!"
    );
    if(confirmation) {
    toast("Hamma narsayiz o'chirildi", {type: "info"});
    axios.delete("api/profile");
    navigate("/")
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
              <button onClick={handleDeleateAccount} className="btn btn-danger">Logout</button>
            </li>
          </ul>
        </div>
      </header>
      <div className="py-5">
        <div className="container">
          <h1>Do you want to create a job opportunities?</h1>
          <p>Enter necessary details and submit</p>
          <form className="my-3">
            <div>
              <label htmlFor="title" className="form-label">
                Job title
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                placeholder="Senior React Developer"
              />
            </div>
            <div>
              <label htmlFor="description" className="form-control">Job description</label>
              <textarea
                name="description"
                id="description"
                rows="5"
                className="form-control"
                placeholder='Tell a little bit about job requirements and benefits...'
              ></textarea>
            </div>
            <button type="submit" className='btn btn-danger w-100 mt-3'>Submit</button>
          </form>
          <h2>Jobs you posted</h2>
        </div>
      </div>
    </div>
  );
}

export default MyJobs;