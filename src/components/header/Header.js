import React from 'react';

const Header = ({ pageHeader }) =>{
    return (
    <header className="header">
        <div className="page-header">
            <h1 className="heading">{pageHeader}</h1>
        </div>
    </header>
    )
}

export default Header;