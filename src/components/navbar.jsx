import React from 'react';


//stateless Functional Component...(we simply define a function that returns a react element)...
//we are doing object destructuring to avoid using "props." several times..

const Navbar = ({totalCounters}) => {
    return ( 
        <nav class="navbar navbar-light">
            <h3>Your Cart!</h3>
            <a class="navbar-brand" href="google.com">TotalItems: 
                <span className="badge badge-pill badge-success m-1">{totalCounters}</span>
            </a>   
        </nav>
    );
};
export default Navbar;