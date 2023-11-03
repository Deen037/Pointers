import "./styles/App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Header from "./components/common/Header.js";
import Body from "./components/common/Body";
import Footer from "./components/common/Footer";
import Judge from "./components/judges/Judge";

function App() {
    const [onJudge, setOnJudge] = useState("DBL3-7-1985Pitkin");
    const [name, setName] = useState("Pitkin");

    function judgePage(x, y) {
        setOnJudge(x);
        setName(y);
    }

    return (
        <div className="App">
            <Router>
                {window.location.pathname === `/${onJudge}` ? (
                    <Judge name={name}/>
                ) : (
                    <div>
                        <Header/>
                        <Body judgePage={judgePage}/>
                        <Footer/>
                    </div>
                )}
            </Router>
        </div>
    );
}

export default App;
