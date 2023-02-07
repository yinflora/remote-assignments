import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../public/index.css';

const App = () => {
    const [allNumber, setAllNumber] = useState(0);

    return (
        <div className="App">
            <div className="counter-wrapper">
                <button onClick={() => setAllNumber(allNumber + 1)}>
                    All + 1
                </button>
                <Counter allNumber={allNumber} />
                <Counter allNumber={allNumber} />
                <Counter allNumber={allNumber} />
            </div>
        </div>
    );
};

const Counter = ({ allNumber }) => {
    const [number, setNumber] = useState(0);

    return (
        <div className="counter">
            <button onClick={() => setNumber(number + 1)}>+1</button>
            <p>{number + allNumber}</p>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
