import About from "./components/About";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from "./components/Blog";

function App(props) {
  return (
    <div className="App">
        <h1>Hello {props.text}</h1>
        <div>
          <Router>
            <Link to="/About">About</Link>
            <br/>
            <Link to="/Blog">Blog</Link>
            <Route path="/About" component={About} />
            <Route path="/Blog" component={Blog} />
          </Router>
        </div>
    </div>
  );
}

export default App;
