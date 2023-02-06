import { useState, useEffect } from 'react';

const App = () => {
    const [data, setData] = useState([]);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(
            // `https://api.github.com/orgs/facebook/repos?per_page=5&amp;page=${page}`
            'https://api.github.com/orgs/facebook/repos?per_page=5&amp;page=1'
        )
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    // function togglePage() {
    //   setPage(page++);
    // }

    return (
        <div className="App">
            <Items itemData={data} />
            {/* <button onClick={togglePage}>More</button> */}
            <button>More</button>
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
                    <span className="topic-item" key={topic}>
                        {topic}
                    </span>
                ))}
            </div>
        </div>
    ));

    return <div className="box">{itemList}</div>;
};

export default App;
