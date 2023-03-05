import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../store/slice/user";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [delEx, setDelEx] = useState(true);
  const [delEdu, setDelEdu] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((u) => u.user);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/");

    async function getMe() {
      try {
        let { data } = await axios.get("profile/me");
        dispatch(addUser(data));
      } catch (error) {
        setUserData(error);
        console.log(err);
      }
    }
    getMe();
  }, [delEx, delEdu]);
  async function handleDeleateExperience(id) {
    try {
      axios.delete(`api/profile/education/${id}`);
      setDelEdu(!delEdu);
      toast("Education olib tashlanmoqda!", { type: "info" });
    } catch (error) {
      console.log(error);
      toast("Nimadir neto ketdi!", { type: "error" });
    }
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
              <button className="btn btn-danger" onClick={handleDeleateAccount}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </header>
      <div className="py-5">
        <div>
          <div className="container">
            <h1>Hello {userData?.user_id?.name}</h1>
            <div>
              <p>
                <p>What are you planning to do today?</p>
                <div className="d-flex gap-3">
                  <Link className="btn btn-primary" to="/my-jobs">
                    Post a job
                  </Link>
                  <Link className="btn btn-info" to="/jobs">
                    Explore jobs
                  </Link>
                </div>
                <div className="py-4">
                  <h2>Your Info</h2>
                  <section>
                    <div className="py-3">
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            src="https://gravatar.com/avatar/53206b59087e5868540c90aaed2fd56c?d=mm&r=pg&s=200"
                            alt=""
                            className="img-fluid rounded-circle"
                          />
                        </div>
                        <div className="col-md-4">
                          <div>
                            Email:{" "}
                            <Link to="mailto:muhammadiyevj768@gmail.com">
                              muhammadiyevj768@gmail.com
                            </Link>
                          </div>
                          <div>Status: Open to work</div>
                          <div>Location: Surxondaryo</div>
                          <div>Bio: Hello World</div>
                          <div>Joined at: 05/03/2023</div>
                        </div>
                        <div className="col-md-4">
                          <div>Company: Apple</div>
                          <div>
                            Website:{" "}
                            <a href="https://apple.com" target="_blank">
                              htttps://apple.com
                            </a>
                          </div>
                          <div>Skills:</div>
                          <div className="d-flex flex-wrap gap-3">
                            <div>
                              <i className="fa-solid fa-check text-danger"></i>
                              ReactJs
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <ul class="list-unstyled d-flex flex-column h-100 justify-content-evenly"></ul>
                        </div>
                        <div className="col text-end">
                          <Link className="btn btn-info" to="/edit-profile">
                            Edit profile
                          </Link>
                        </div>
                        <div className="col-md-2">
                          <Link
                            className="btn btn-primary"
                            to="/edit-profile/socilas"
                          >
                            Edit Socials
                          </Link>
                        </div>
                      </div>
                      <div className="bg-white p-3 border">
                        <h4>No Experience Added.</h4>
                        <div>
                          <div className="text-center">
                            <Link
                              className="btn btn-danger"
                              to="/add-exerience"
                            >
                              Add
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              <Link className="btn btn-danger" to="/create-profile">
                Create Profile
              </Link>
              </p>
              <div className="bg-white border p-5">
                <h2 className="display-1 text-danger">!!!DANGER ZONE!!!</h2>
                <p>
                  This area is so dangerous. You may delete all your data by
                  accident in here! PLEASE BE CAREFUL!!!
                </p>
                <button className="btn btn-danger">Delete account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
