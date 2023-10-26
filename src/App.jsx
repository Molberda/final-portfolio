import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./CSS/App.css";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import ProjectList from "./Pages/ProjectList";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/projects" element={ <ProjectList /> }/>
        <Route path="/aboutme" element={ <About /> }/>
      </Routes>
    </Router>
  );
}

export default App;
