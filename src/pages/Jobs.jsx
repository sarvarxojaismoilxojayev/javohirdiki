import React from 'react'
import { Link } from 'react-router-dom';

const Jobs = () => {
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
          <h1>Find the best opportunities...</h1>
          <div className="bg-white border my-3 p-4">
            <div className="row">
              <div className="col-md-8">
                <Link className="text-reset text-decoration-none" to="/jobs/*">
                  <h3>Imtixonda hammaga OMAD!</h3>
                  <p>Hammaniki bir-birinikidan zo'r chiqadi digan umiddaman</p>
                  <p>By: Alisherjon</p>
                  <p>27/02/2023</p>
                </Link>
              </div>
              <div className="col-md-2 d-flex flex-column gap-3">
                <button className="btn btn-primary">
                  <i className="fa-solid fa-thumbs-up">
                    <span className="badge text-bg-light">20</span>
                  </i>
                </button>
                <button className="btn btn-secondary">
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                <button className="btn btn-success">
                  <i className="fa-solid fa-graduation-cap">
                    <span className="badge text-bg-light">26</span>
                  </i>
                </button>
              </div>
              <div className="col-md-2 d-flex flex-column justify-content-center gap-3">
                <button className='btn btn-danger'>
                  <i className="fa-solid fa-check"></i>
                  Applied
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs
