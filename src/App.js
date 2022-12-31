import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";

function App() {
        return (
                <div className="App">
                        <header className="App-header">
                                <img
                                        src={logo}
                                        className="App-logo"
                                        alt="logo"
                                />
                                <div>
                                        <ComponentA />
                                </div>
                        </header>
                </div>
        );
}

export default App;
