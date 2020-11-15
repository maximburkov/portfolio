import Layout from "./components/Layout";

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
