function App() {
    return (
        <div className="wrapper">
            <Header />
        </div>
    );
};

function Header() {
    return (
        <header className="top-nav">
            <div className="main-header">
                <p className="name"><a href="#">Website Title / Logo</a></p>
                <i className="fa-solid fa-bars"></i>
                <div className="nav-container">
                    <ul className="main-nav">
                        <li><a href="#">Item1</a></li>
                        <li><a href="#">Item2</a></li>
                        <li><a href="#">Item3</a></li>
                        <li><a href="#">Item4</a></li>
                    </ul>
                    <button className="cancel-btn">X</button>
                </div>
            </div>
        </header>
    );
}


// 取得在 HTML 中事先定義好的容器元素，以作為之後 React 產生 DOM elements 結果的輸出容器
const container = document.getElementById('root');
// 用這個容器元素來建立一個 React App 的畫面渲染管轄入口 (root)
const root = ReactDOM.createRoot(container);
root.render(<App />);