import "./App.css";
import AnotherComponent from "./components/AnotherComponent";
import Container from "./components/Container";
import "./components/FirstComponent";
import FirstComponent from "./components/FirstComponent";
import Fragment from "./components/Fragment";
import Hooks from "./components/Hooks";
import Images from "./components/Images";
import List from "./components/List";
import RenderCond from "./components/RenderCond";

function App() {
  return (
    <div className="App">
      <h2>Hello React 2 </h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={5} y={10} />
      <Fragment />
      <Container>
        <h1>Este é o filho do Container</h1>
      </Container>
    </div>
  );
}

export default App;
