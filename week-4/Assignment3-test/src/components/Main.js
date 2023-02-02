import React, { useState } from 'react';

const Main = () => {
    // Track the content area state with useSate, and set the initial value as false
    const [showContent, setShowContent] = useState(false);

    // Function for switching the content area state
    function toggleButton() {
        setShowContent(!showContent);
    }

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
                <button className="btn" onClick={toggleButton}>
                    Call to Action
                </button>
            </div>
            {/* <Button className="call-to-action" /> */}

            <div
                className="row2"
                style={{ display: showContent ? 'flex' : 'none' }}
            >
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

// const Button = (props) => {
// Track the content area state with useSate, and set the initial value as false
// const [showContent, setShowContent] = useState(false);

// Function for switching the content area state
//     function toggleButton() {
//         setShowContent(!showContent);

//         return (
//             <div className={props.className}>
//                 <button className="btn" onClick={toggleButton}>
//                     Call to Action
//                 </button>
//             </div>
//         );
//     }
// };

export default Main;
