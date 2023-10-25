import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./CSS/App.css";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={ <Home /> }/>
      </Routes>
    </Router>
  );
}

export default App;
