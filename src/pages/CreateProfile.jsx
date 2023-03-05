import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {} from "react-toastify"
const CreateProfile = () => {
   const navigate = useNavigate();
  const [myData, setMyData] = useState([]);

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    status: "",
    company: "",
    location: "",
    skills: [],
    githubusername: "",
    website: "",
  });

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/");

    async function bringData(){
      let {data} = await axios.get("/api/profile/me")
      setMyData(data);
    } bringData()
    
  }, [values]);

  function handleSocialLinks(e) {
    e.preventDefault();
    setOpen(!open);
  }

  function handleInputChange(e){
    setValues(oldV =>({
      ...oldV,
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
      await axios.post("/profile", values)
      toast("Profile Changed Successfully", {type:"success"})
      navigate('/dashboard')
    } catch (error) {
      toast("Fill out the required fields", {type:"error"})
      console.log(error); 
    }
  }

  console.log(myData);

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
          <form>
            <p className="text-danger">* = required fields</p>
            <div className="row g-3">
              <div className="col-md-6">
                <div>
                  <label htmlFor="form-label">* Work Status</label>
                  <select
                    name="status"
                    id="status"
                    className="form-select"
                    value={values.status}
                    onChange={handleInputChange}
                  >
                    <option value>Select your work status</option>
                    <option value="Open to work">Open to work</option>
                    <option value="Open to hire">Open to hire</option>
                    <option value="Looking for new opportunities">
                      Looking for new opportunities
                    </option>
                  </select>
                  <p className="form-text">
                    Select the best option that fits you
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label className="form-label" htmlFor="skills">
                    * Skills
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="skills"
                    id="skills"
                    placeholder="HTML, CSS, JS"
                    value={values.skills}
                    onChange={handleInputChange}
                  />
                  <p className="form-text">Separate each skill with comma(,)</p>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="company" className="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    id="company"
                    placeholder="Apple Inc."
                    value={values.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="location"
                    id="location"
                    placeholder="One Apple Park Way; Cupertino, CA 95014, U.S.A."
                    value={values.location}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label className="form-label" htmlFor="website">
                    Website
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="website"
                    id="website"
                    placeholder="apple.com"
                    value={values.website}
                    onChange={handleInputChange}
                  />
                  <p className="form-text">
                    You do not need to specify https protocol
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="githubusername" className="form-label">
                    Github user name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="githubusername"
                    id="githubusername"
                    placeholder="apple"
                    value={values.githubusername}
                    onChange={handleInputChange}
                  />
                  <p>
                    <p class="form-text">
                      You need to specify only username (without
                      https://github.com)
                    </p>
                  </p>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="bio" className="form-label">
                  Bio
                </label>
                <textarea
                  name="bio"
                  id="bio"
                  rows="5"
                  className="form-control"
                  placeholder="Tell us a little bit about yourself"
                ></textarea>
                <p className="form-text">
                  You may say about your recent experience or what you are up
                  to.
                </p>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-danger w-100"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;