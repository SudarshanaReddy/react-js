import React from 'react';
import ReactDOM from 'react-dom';

const Title = () => (
    <h1 id="heading">React Using JSX </h1>
 );

 //react element
const title = (
    <h1 id="heading">title element</h1>
);

 const value = 10000;

//react functional compoent
const HeadingComponent = () => (
  <div id="container">
    <h2>{title}</h2>
    <h1 className='heading'>Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);