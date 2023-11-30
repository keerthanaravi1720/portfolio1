



// import React from 'react';
// import './nav.css';

// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//       <div className="shape"> </div>{/* Square shape */}
//       <div className="heading">Name</div>
//       <ul className="navbar">
//         <li className="navbar-item">About</li>
//         <li className="navbar-item">Resume</li>
//         {/* Add more list items for additional items */}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;



// import React from 'react';
// import { MenuOutlined } from '@ant-design/icons';
// import './nav.css'; // Import your CSS file for styling

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="menu-icon">
//         <MenuOutlined />
//       </div>
//       <div className="navbar-center">
//         <a href="/about">About</a>
//         <a href="#resume">Resume</a>
//         <a href='#Work'>Work</a>
//         <a href='#contact'>Contact</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





// import React from 'react';
// import { Link } from 'react-scroll';

// const Navbar = () => (
//   <nav>
//     <ul>
//       <li>
//         <Link
//           activeClass="active"
//           to="/"
//           spy={true}
//           smooth={true}
//           duration={1000}
//         >
//           About
//         </Link>
//       </li>
//       <li>
//         <Link
//           activeClass="active"
//           to="/r"
//           spy={true}
//           smooth={true}
//           duration={1000}
//         >
//           Resume
//         </Link>
//       </li>
//     </ul>
//   </nav>
// );

// export default Navbar;



// import React from 'react';
// import { Link } from 'react-scroll';
// import './nav.css';
// import { MenuOutlined } from '@ant-design/icons';

// const Navbar = () => (
 
//   <nav>
//      <div className="menu-icon">
//   <MenuOutlined /> {/* Add the MenuOutlined icon */}
//   </div>
//     <ul>
//       <li>
//         <Link
//           activeClass="active"
//           to="/"
//           spy={true}
//           smooth={true}
//           duration={1000}
//         >
//           About
//         </Link>
//       </li>
//       <li>
//         <Link
//           activeClass="active"
//           to="/r"
//           spy={true}
//           smooth={true}
//           duration={1000}
//         >
//           Resume
//         </Link>
//       </li>
//       <li>
//         <Link
//           activeClass="active"
//           to="/w"
//           spy={true}
//           smooth={true}
//           duration={1000}
//         >
//          Work
//         </Link>
//       </li>
//       <li>
//         <Link
//           activeClass="active"
//           to="/c"
//           spy={true}
//           smooth={true}
//           duration={1000}
//         >
//          Contact
//         </Link>
//       </li>
//     </ul>
  
//   </nav>
// );

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
// import './nav.css';
// import { MenuOutlined } from '@ant-design/icons';

// const Navbar = () => {
//   // State to manage the visibility of the menu on mobile
//   const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

//   // Toggle the mobile menu visibility
//   const toggleMobileMenu = () => {
//     setMobileMenuVisible(!mobileMenuVisible);
//   };

//   // Add a useEffect to set the initial state based on screen width
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 768) {
  //       setMobileMenuVisible(false);
  //     } else {
  //       setMobileMenuVisible(true);
  //     }
  //   };

  //   handleResize(); // Call it initially

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

//   return (
//     <nav>
//       <div className="menu-icon" onClick={toggleMobileMenu}>
//         <MenuOutlined />
//       </div>
//       {mobileMenuVisible ? (
//         <ul className="mobile-menu">
//           <li>
//             <Link
//               activeClass="active"
//               to="/"
//               spy={true}
//               smooth={true}
//               duration={100}
//             >
//              🇦​​🇧​​🇴​​🇺​​🇹
             
//             </Link>
//           </li>
//           <li>
//             <Link
//               activeClass="active"
//               to="/r"
//               spy={true}
//               smooth={true}
//               duration={100}
//             >
//              ​🆁🅴🆂🆄🅼🅴
//             </Link>
//           </li>
//           <li>
//             <Link
//               activeClass="active"
//               to="/w"
//               spy={true}
//               smooth={true}
//               duration={100}
//             >
//               ᴘʀᴏᴊᴇᴄᴛꜱ
//             </Link>
//           </li>
//           <li>
//             <Link
//               activeClass="active"
//               to="/c"
//               spy={true}
//               smooth={true}
//               duration={100}
//             >
//              ​ᴄᴏɴᴛᴀᴄᴛ ᴍᴇ
//             </Link>
//           </li>
//         </ul>
//       ) : null}
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './nav.css';
import { MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = (e) => {
    e.stopPropagation(); // Prevent the event from propagating
    setMobileMenuVisible(!mobileMenuVisible);
  };

  // Create a ref for the menu element
  const menuRef = useRef(null);

  // Function to close the menu
  const closeMenu = () => {
    setMobileMenuVisible(false);
  };

  // Add a click event listener to the document
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobileMenuVisible(false);
      } else {
        setMobileMenuVisible(true);
      }
    };

    handleResize(); // Call it initially

    window.addEventListener('resize', handleResize);

    // Event listener for clicks outside the menu
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <MenuOutlined />
      </div>
      <ul
        ref={menuRef} // Attach the ref to the menu element
        className={`mobile-menu ${mobileMenuVisible ? 'show' : ''}`}
      >
        <li>
          <Link activeClass="active" to="/" spy={true} smooth={true} duration={100}>
            About
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="/r" spy={true} smooth={true} duration={100}>
            Resume
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="/w" spy={true} smooth={true} duration={100}>
            Projects
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="/c" spy={true} smooth={true} duration={100}>
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
