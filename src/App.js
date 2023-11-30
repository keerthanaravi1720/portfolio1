



// import React from "react";
// import { Link, Element,  animateScroll as scroll, } from "react-scroll";
// import "./App.css";

// function App() {
//   // Smooth scrolling options
//   const smoothScrollOptions = {
//     duration: 1000, // Animation duration (in milliseconds)
//     smooth: "easeInOutQuart", // Easing function
//   };

//   // Scroll to the specified section when a navbar link is clicked
//   const scrollToSection = (section) => {
//     scroll.scrollTo(section, smoothScrollOptions);
//   };

//   return (
//     <div className="App">
//       {/* Navigation bar */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="about" smooth={true} duration={500}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="resume" smooth={true} duration={500}>
//               Resume
//             </Link>
//           </li>
//           <li>
//             <Link to="work" smooth={true} duration={500}>
//               Work
//             </Link>
//           </li>
//           <li>
//             <Link to="contact" smooth={true} duration={500}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Sections */}
//       <Element name="about">
//         <section className="about">About Section Content</section>
//       </Element>
//       <Element name="resume">
//         <section className="resume">Resume Section Content</section>
//       </Element>
//       <Element name="work">
//         <section className="work">Work Section Content</section>
//       </Element>
//       <Element name="contact">
//         <section className="contact">Contact Section Content</section>
//       </Element>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import Navbar from './compoents/Navbar';
// import { Route,Routes } from 'react-router-dom';
// import About from './Page/About';
// import Resume from './Page/Resume';
// import './App.css'


// const App = () => {
//   return (
//     <div>
// <Navbar/>
// <Routes>

// <Route path='/about' element={<About/>}/>

// <Route path='/resume' element={<Resume/>}/>


// </Routes>
//     </div>
//   )
// }

// export default App



// App.js

import React from 'react';

import { Element } from 'react-scroll';
import About from './Page/About';
import Resume from './Page/Resume';
import Navbar from './compoents/Navbar';
import Work from './Page/Work';
import Contact from './Page/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Element name="/" className="element">
        <About/>
      </Element>
      <Element name="/r" className="element">
        <Resume/>
      </Element>
<Element name='/w' className='element'>
  <Work/>
</Element>
<Element name='/c' className='element'>
  <Contact/>
</Element>
    </div>
  );
};

export default App;





