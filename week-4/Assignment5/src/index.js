import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../public/index.css';

const App = () => {
    const [allNumber, setAllNumber] = useState(0);
    const [counterNum, setCounterNum] = useState(['1', '2', '3']);

    const counterList = counterNum.map((counter, index) => (
        <Counter allNumber={allNumber} key={index} />
    ));

    const addCounter = () => {
        setCounterNum([...counterNum, 'newCounter']);
    };

    return (
        <div className="App">
            <div className="counter-wrapper">
                <button onClick={() => setAllNumber(allNumber + 1)}>
                    All + 1
                </button>

                {counterList}

                <button className="add-counter" onClick={addCounter}>
                    Add a Counter
                </button>
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
