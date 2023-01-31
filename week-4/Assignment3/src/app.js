// ./src/app.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <Header />

            <Banner />

            <ContentBox />
        </div>
    );
};

function Header() {
    // Track the menu state with useSate, and set the initial value as false
    const [ menuOpen, setMenuOpen ] = useState(false);

    // Function for switching the menu state
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="top-nav">
            <div className="main-header">
                <p className="name"><a href="#">Website Title / Logo</a></p>
                <i className="fa-solid fa-bars" onClick={ toggleMenu }></i>
                <div className="nav-container" style={{ display: menuOpen ? "inline-block" : "none"}}>
                    <ul className="main-nav">
                        <li><a href="#">Item1</a></li>
                        <li><a href="#">Item2</a></li>
                        <li><a href="#">Item3</a></li>
                        <li><a href="#">Item4</a></li>
                    </ul>
                    <button className="cancel-btn" onClick={ toggleMenu }>X</button>
                </div>
            </div>
        </header>
    );
};

function Banner() {
    // Track the message state with useSate, and set the initial value as "Welcome Message"
    const [ message, setMessage ] = useState("Welcome Message");

    return (
        // JSX expressions must have one parent element in React
        <> 
            <div className="banner">
                <h1 className="headline" onClick={() => setMessage("Have a Good Time!")}>{ message }</h1>
            </div>
        </>
    );
};

function ContentBox() {
    // Track the content area state with useSate, and set the initial value as false
    const [ showContent, setShowContent ] = useState(false);

    // Function for switching the content area state
    function toggleButton() {
        setShowContent(!showContent);
    };

    return (
        <> 
            <div className="title">
                <h2>Section Title</h2>
            </div>

            <div className="row">
                <div className="col">
                    <p>Content Box 1</p>
                </div>
                <div className="col">
                    <p>Content Box 2</p>
                </div>
                <div className="col">
                    <p>Content Box 3</p>
                </div>
                <div className="col">
                    <p>Content Box 4</p>
                </div>
            </div>

            <div className="call-to-action">
                <button className="btn" onClick={ toggleButton }>Call to Action</button>
             </div>

            <div className="row2" style={{ display: showContent ? "flex" : "none" }}>
                <div className="col">
                    <p>Content Box 5</p>
                </div>
                <div className="col">
                    <p>Content Box 6</p>
                </div>
                <div className="col">
                    <p>Content Box 7</p>
                </div>
                <div className="col">
                    <p>Content Box 8</p>
                </div>
            </div>
        </>
    );
};


// 取得在 HTML 中事先定義好的容器元素，以作為之後 React 產生 DOM elements 結果的輸出容器
const container = document.getElementById('root');
// 用這個容器元素來建立一個 React App 的畫面渲染管轄入口 (root)
const root = ReactDOM.createRoot(container);
root.render(<App />);