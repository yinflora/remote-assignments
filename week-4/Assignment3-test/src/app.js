// ./src/app.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';

function App() {
    return (
        <div>
            <Header />

            <Banner />

            <Main />
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
