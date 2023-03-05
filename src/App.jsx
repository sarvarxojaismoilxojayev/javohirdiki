import { Route, Routes } from "react-router-dom";
import AddEducation from "./pages/AddEducation";
import CreateProfile from "./pages/CreateProfile";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home"
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import MyJobs from "./pages/MyJobs";
import Notfound from "./pages/Notfound";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/*" element={<Notfound />} />
      <Route path="/create-profile" element={<CreateProfile />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/my-jobs" element={<MyJobs />} />
      <Route path="/add-education" element={<AddEducation/>} />
    </Routes>
  );
}
export default App;