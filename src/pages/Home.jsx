import React from 'react'
import { Link} from "react-router-dom"
const Home = () => {
  return (
    <div>
      <header className="bg-white border-bottom shadow stiky-top">
        <div className="container py-3 d-flex align-items-center justify-content-between">
          <Link className="text-danger display-6 text-decoration-none" to="#">
            JOBIFY
          </Link>

          <ul className="navbar-nav flex-row align-items-center gap-4">
            <li className="nav-item">
              <Link className="text-reset text-decoration-none" to="/jobs">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-reset text-decoration-none " to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-reset text-decoration-none" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <section className='main-section'>
        <div
          id="landing-showcase"
          className="text-white d-flex align-items-center justify-content-center"
        >
          <div className="w-50 text-center py-5">
            <h1 className='dispaly-1'>Find the <span className='text-danger'>best</span> opportunities with <span className='text-danger'>us</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptate repellendus at commodi, distinctio nostrum accusamus similique quasi libero quia cum totam sed vel dolorem vero esse explicabo voluptates cumque doloribus mollitia, veritatis possimus quo quos cupiditate. Consequuntur tempora error aliquam animi sunt! A exercitationem dignissimos dolores possimus alias sunt iure labore accusantium officia fuga distinctio, nemo doloremque excepturi architecto deserunt dolorum ad ab ipsam rerum eligendi perferendis non?</p>
            <div className='d-flex align-items-center gap-3 justify-content-center'>
              <Link className='btn btn-danger' to="/register" >Register</Link>
              <Link className='btn btn-outline-danger' to="/login" >Login</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;