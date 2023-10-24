import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./CSS/App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }/>
      </Routes>
    </Router>
  );
}

export default App;
