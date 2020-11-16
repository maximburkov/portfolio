import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  return (
    <div className="App">
        <h1>Hello {props.text}</h1>
        <div>
          <Layout/>
        </div>
    </div>
  );
}

export default App;
