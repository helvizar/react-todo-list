import { AddList } from "./components/AddList";
import { Todos } from "./components/Todo-Items";

function App() {
  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <AddList />
        <Todos />
      </div>
    </div>
  );
}

export default App;
