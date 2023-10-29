import { Form } from './components/Add-List';
import { Todos } from './components/Todo-Items';

function App() {

  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form />
      <Todos />
    </div>
  );
}

export default App;
