import { BrowserRouter as Router} from "react-router-dom";
import "./CSS/App.css";
import Nav from "./Components/Nav";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {

  return (
    <Router>
      <Nav/>
        <AnimatedRoutes/>
    </Router>
  );
}

export default App;
