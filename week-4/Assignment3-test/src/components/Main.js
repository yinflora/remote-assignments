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
            {/* <ContentBoxes
                className="row2"
                style={{ display: showContent ? 'flex' : 'none' }}
            /> */}
        </>
    );
};

const ContentBoxes = (props) => {
    // let boxArr = [
    //     'Content Box 1',
    //     'Content Box 2',
    //     'Content Box 3',
    //     'Content Box 4',
    // ];
    let contentList = props.text.map((box, index) => (
        <div className="col">
            <p key={index}>{box}</p>
        </div>
    ));

    return <div className={props.className}>{contentList}</div>;
};

export default Main;
