import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../public/index.css';

const App = () => {
    const counterList = ['1', '2', '3'];
    const generatedCounter = counterList.map((counter) => <Counter />);

    return (
        <div className="App">
            <div className="counter-wrapper">{generatedCounter}</div>
        </div>
    );
};

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <div className="counter">
            <button onClick={() => setNumber(number + 1)}>+1</button>
            <p>{number}</p>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
