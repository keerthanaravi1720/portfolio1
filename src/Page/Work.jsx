import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import '../css/work.css';

const codeExample = `// Your source code here
function greeting() {
  console.log('Hello, world!');
}

projects(){
  [
    {'2023-now': 'Cargo Plus/Reon Technologies'}
    {'2023-now': 'Cargo/Reon Technologies'}
  ]
}

`
;

const Work = () => {
  return (
    <div className="section work">
      <h1 className='text-w'>ᴘʀᴏᴊᴇᴄᴛꜱ​</h1>
      {/* <p>This is the work page content.</p>

      <h2>Source Code Example</h2> */}
      <SyntaxHighlighter language="javascript" style={darcula} className='syntax'>
        {codeExample}
      </SyntaxHighlighter>
    </div>
  );
};

export default Work;
