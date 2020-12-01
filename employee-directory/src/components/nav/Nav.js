import React from 'react';


function Nav(props) {

    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <form className="form-inline my-2 my-lg-0">
        <input value={props.searchState} onChange={props.onChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </input>
    </form>
</nav>

    )
};


export default Nav;