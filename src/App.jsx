import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Nav";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import "./CSS/App.css";

function App() {
  return (
      <Router>
        <Nav />
        <AnimatedRoutes />
      </Router>
  );
}

export default App;
