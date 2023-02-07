import React, { useState, useEffect } from 'react';

const App = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const api = `https://api.github.com/orgs/facebook/repos?per_page=5&amp;page=${page}`;

    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((newData) => setData(data.concat(newData)));
    }, [api, page]);

    return (
        <div className="App">
            <div className="box">
                <Items itemData={data} />
            </div>
            <button onClick={() => setPage(page + 1)}>More</button>
        </div>
    );
};

const Items = ({ itemData }) => {
    const itemList = itemData.map((item) => (
        <div className="item" key={item.id}>
            <div className="title">
                <span>{item.name}</span>
                <span>{item.visibility}</span>
            </div>
            <p className="description">{item.description}</p>
            <div className="topic">
                {item.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                ))}
            </div>
        </div>
    ));

    return <>{itemList}</>;
};

export default App;
