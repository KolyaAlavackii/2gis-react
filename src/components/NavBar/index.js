import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';

const menuItems = [
    {
        name: "Main page",
        link: "/"
    },
    {
        name: "About author",
        link: "/about"
    }
];

const NavBar = () => {
    return (
        <header>
            <nav className="menu">
                {
                    menuItems.map((item, index) =>
                    <NavLink
                        key={index}
                        className="menu-item"
                        activeClassName="active-menu-item"
                        to={item.link}
                        exact
                    >
                        {item.name}
                    </NavLink>) 
                }
            </nav>
        </header>
    );
}

export default NavBar;