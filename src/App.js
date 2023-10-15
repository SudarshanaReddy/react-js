import React from 'react';
import ReactDOM from 'react-dom';

import  Header from './components/Header';
import  Body  from './components/Body';


//functional component
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const Footer = () => (
    <div className="footer">

    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);