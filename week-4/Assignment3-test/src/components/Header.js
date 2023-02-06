import React, { useState } from 'react';

const Header = () => {
    // Track the menu state with useSate, and set the initial value as false
    const [menuOpen, setMenuOpen] = useState(false);

    // Function for switching the menu state
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="top-nav">
            <div className="main-header">
                <p className="name">
                    <a href="#">Website Title / Logo</a>
                </p>

                <MenuItems className="horizontal-menu" />

                <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
                <div
                    className="nav-container"
                    style={{ display: menuOpen ? 'inline-block' : 'none' }}
                >
                    <MenuItems className="vertical-menu" />
                    <button className="cancel-btn" onClick={toggleMenu}>
                        X
                    </button>
                </div>
            </div>
        </header>
    );
};

const MenuItems = (props) => {
    const itemArr = ['item1', 'item2', 'item3', 'item4'];
    const menuList = itemArr.map((item, index) => <li key={index}>{item}</li>);
    return <ul className={props.className}>{menuList}</ul>;
};

export default Header;
