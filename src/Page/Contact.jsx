// import React from 'react';
// import '../css/c.css';
// // import '../App.css';

// const Contact = () => (
//     <div className="section contact">
//       <h1 className='text-c'>Contact Me </h1>
//       <div className='t-c'>
      
// <h4 style={{marginRight:15}}  >Dipin Das</h4>


// <p>Mern Stack Developer</p>

// <p className='head'>Email:</p>
//   <p>example@gmail.com</p>
// <p className='head'>Address:</p>
//   <p>14 Road, New York Street</p>
// <p className='head'>Phone:</p>
//   <p>1234-5678-90</p>
// </div>
     
//     </div>
//   );
  

// export default Contact


// import React from 'react';
// import { AiFillPhone, AiFillMail, AiFillHome } from 'react-icons/ai'; // Import icons
// import '../css/c.css';

// const Contact = () => (
//   <div className="section contact">
//     <h1 className='text-c'>Contact Me</h1>
//     <div className='t-c'>
//     <div className='name-profession'>
//         <h4 className='name'>Dipin Das</h4>
//         <p className='profession'>Mern Stack Developer</p>
//       </div>
//       <div className='contact-info'>
//         <div className='contact-item'>
//           <AiFillMail className='icon' />
//           <p>example@gmail.com</p>
//         </div>
//         <div className='contact-item'>
//           <AiFillHome className='icon' />
//           <p>14 Road, New York Street</p>
//         </div>
//         <div className='contact-item'>
//           <AiFillPhone className='icon' />
//           <p>1234-5678-90</p>
//         </div>
//       </div>
    
//     </div>
//   </div>
// );

// export default Contact;


import React from 'react';
import { AiFillPhone, AiFillMail, AiFillHome } from 'react-icons/ai'; // Import icons
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons
import '../css/c.css';
import { Button } from 'antd';

const Contact = () => (
  <div className="section contact">
    <h1 className='text-c'>​ᴄᴏɴᴛᴀᴄᴛ ᴍᴇ​</h1>
    <div className='t-c'>
      <div className='name-profession'>
        <h4 className='name'>Dipin Das</h4>
        <p className='profession'>Mern Stack Developer</p>
      </div>
      <div className='contact-info'>
        <div className='contact-item'>
          <AiFillMail className='icon' />
          <p>example@gmail.com</p>
        </div>
        <div className='contact-item'>
          <AiFillHome className='icon' />
          <p>14 Road, New York Street</p>
        </div>
        <div className='contact-item'>
          <AiFillPhone className='icon' />
          <p>1234-5678-90</p>
        </div>
      </div>
      <div className='social-icons'>
        <FaWhatsapp className='social-icon' />
        <FaFacebook className='social-icon' />
        <FaLinkedin className='social-icon' />
        <FaInstagram className='social-icon' />
      </div>

     
    </div>
    <Button  className="download-cv-button">
        Download CV
      </Button>
  </div>
);

export default Contact;

