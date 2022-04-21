import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";

import './app.scss';
import Notfound from "./Pages/Notfound/Notfound";

function App() {
  return (
    <div className="app">
      <header>         
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path="about" element = {<About/>} />
          <Route path="blog" element = {<Blog/>} />
          <Route path="services" element = {<Services/>} />
          <Route path="contact" element = {<Contact/>} />
          <Route path="*" element = {<Notfound/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
