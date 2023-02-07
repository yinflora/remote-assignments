import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../public/index.css';

const App = () => {
    return (
        <div className="App">
            <Counter />
        </div>
    );
};

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <>
            <button onClick={() => setNumber(number + 1)}>+1</button>
            <p>{number}</p>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
