import './App.css';
import Navbar from './shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Course from './pages/Course/Course';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Course />} />
        <Route path="/" element={<Blog />} />
        <Route path="/" element={<Contact />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
