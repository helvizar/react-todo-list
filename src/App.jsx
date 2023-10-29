import { AddList } from "./components/AddList";
import Footer from "./components/Footer";
import { Todos } from "./components/TodoItems";

function App() {
  return (
    <div>
      <div className="wrapper" style={{ minHeight: "93vh" }}>
        <br></br>
        <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
        <div className="mx-auto mb-5" style={{ maxWidth: "800px" }}>
          <AddList />
          <Todos />
        </div>
      </div>
      <Footer  />
    </div>
  );
}

export default App;
