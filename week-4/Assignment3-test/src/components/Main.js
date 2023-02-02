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

            <ContentBoxes
                className="row"
                text={[
                    'Content Box 1',
                    'Content Box 2',
                    'Content Box 3',
                    'Content Box 4',
                ]}
            />

            <div className="call-to-action">
                <button className="btn" onClick={toggleButton}>
                    Call to Action
                </button>
            </div>

            <ContentBoxes
                className="row"
                text={[
                    'Content Box 5',
                    'Content Box 6',
                    'Content Box 7',
                    'Content Box 8',
                ]}
                style={{ display: showContent ? 'flex' : 'none' }}
            />
        </>
    );
};

const ContentBoxes = (props) => {
    let contentList = props.text.map((box) => (
        <div className="col">
            <p key={box}>{box}</p>
        </div>
    ));

    return (
        <div className={props.className} style={props.style}>
            {contentList}
        </div>
    );
};

export default Main;
