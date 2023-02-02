import React, { useState } from 'react';

const Banner = () => {
    // Track the message state with useSate, and set the initial value as "Welcome Message"
    const [message, setMessage] = useState('Welcome Message');

    return (
        // JSX expressions must have one parent element in React
        <>
            <div className="banner">
                <h1
                    className="headline"
                    onClick={() => setMessage('Have a Good Time!')}
                >
                    {message}
                </h1>
            </div>
        </>
    );
};

export default Banner;
