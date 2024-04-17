import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./routes/login/login";
import Register from "./routes/register/register";
import Home from "./routes/homePage/homePage";
//import Contact from "./routes/contact/contact";
import About from "./routes/about/about";
import Profile from "./routes/profile/profile";
import Events from "./routes/events/events";
import Layout from "./routes/layout/layout";
import SingleEvent from "./routes/singleEvent/singleEvent";
import { LogOut } from "lucide-react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        {/**<Route path="/contact" element={<Contact />} />*/}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/singleEvent" element={<SingleEvent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
