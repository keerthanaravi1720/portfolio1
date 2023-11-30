


// import React from 'react';
// import '../css/r.css';
// import { Row, Col, Card } from 'antd';

// const Resume = () => (
//   <div className="section resume">
//     <h1 className='text-h1'>Resume</h1>
// <div className='card1'>
//     <Row gutter={16}>
//       <Col span={12}>
//         <Card /* Other card props */>
//           {/* Card content for the first card */}
//         </Card>
//       </Col>
//       <Col span={12}>
//         <Card /* Other card props */>
//           {/* Card content for the second card */}
//         </Card>
//       </Col>
//     </Row>
//     </div>
//   </div>
// );

// export default Resume;



import React from 'react';
import '../css/r.css';

const Resume = () => (
  <div className="section resume">
    <h1 className='text-h1'>​🆁🅴🆂🆄🅼🅴​</h1>
    <div className="card-container">
      <div className="card1">
        <h2 >Education</h2>
        <div className='text-r'>
        <p style={{textDecoration:'underline'}}>2016-2018</p>
        <p >This is the content of Card 1</p>
        <p style={{textDecoration:'underline'}}>2018-2020</p>
        <p>This is the content of Card 1</p>
        <p style={{textDecoration:'underline'}}>2020-2023</p>
        <p>This is the content of Card 1</p>
      </div>
      </div>
      <div className="card1">
       
        <h2 >Personal Skills</h2>
        <div className='text-r1'>
        <p><li>Adaptibility</li></p>
        <p><li>Patience</li></p>
        <p><li>Honest</li></p>
        <p><li>Writing</li></p>
        <p><li>Creativity</li></p>
        </div>
      </div>
    </div>
    <h2 style={{textAlign:"center",  fontSize:25}}>​🇸​​🇰​​🇮​​🇱​​🇱​​🇸​
​</h2>
    <div className="circle-container">
   
      <div className="circle">
       
        <p >Nest</p></div>
      <div className="circle">
        <p >Mern</p></div>
      <div className="circle">
        <p >Docker</p></div>
        <div className="circle">
        <p >Java</p></div>
    </div>
  </div>
);

export default Resume;
