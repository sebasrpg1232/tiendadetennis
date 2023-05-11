import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <Router>
          <Menu>
            <Routes>
              <Route exact path="/"></Route>
            </Routes>
          </Menu>
        </Router>
      </nav>
    </div>
  );
}

export default App;
