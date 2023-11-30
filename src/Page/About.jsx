// import React from 'react';
// import '../css/header.css';

// const About = () => (
//   <div className="section about">
//     <div className="text">
//       <div className="text-content">
//         <h6>HELLO, MY NAME IS</h6>
      
//         <h2 className='h2'>FULL NAME</h2>
     
//         <p>I AM <i>Web developer</i></p>
//         <p className="additional-text">I'm a paragraph. Click here to add your own text and edit me. 
//         It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
//         I’m a great place for you to tell a story and let your users know a little more about you.</p>
//       </div>
//     </div>
//     <div className="image">
//       <img
//         src="https://static.wixstatic.com/media/c837a6_0253876c52cc473e888d7842bc048c43~mv2.png/v1/fill/w_344,h_369,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1768049210.png"
//         alt=""
//         style={{ width: '229px', height: '246px', objectFit: 'cover', objectPosition: '50% 50%' }}
//       />
//     </div>
//   </div>
// );

// export default About;




import React from 'react';
import '../css/header.css';

const About = () => (
  <div className="section about">
   <h2 className='text-h2'>
   ``ᴀʙᴏᴜᴛ ᴍᴇ``
  
    </h2>
    <div className="card">
      <div className="text-content">
        <h6 style={{color:'black'}}>HELLO, MY NAME IS</h6>
        <h2 className='h2' style={{color:"black"}}>​🇩​​🇮​​🇵​​🇮​​🇳​ ​🇩​​🇦​​🇸​​</h2>
        <p style={{color:'black'}}>𝕀 𝔸𝕄 <i>𝓦𝓮𝓫 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻</i></p>
        <p className="additional-text">I'm a paragraph. Click here to add your own text and edit me. 
        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        I’m a great place for you to tell a story and let your users know a little more about you.</p>
      </div>
    </div>
    <div className="image">
      <img
        src="https://static.wixstatic.com/media/c837a6_0253876c52cc473e888d7842bc048c43~mv2.png/v1/fill/w_344,h_369,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1768049210.png"
        alt=""
        style={{ width: '229px', height: '246px', objectFit: 'cover', objectPosition: '50% 50%' }}
      />
    </div>
  </div>
);

export default About;
