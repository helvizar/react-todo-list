import { Form } from './components/Add-List';
import { Todos } from './components/Todo-Items';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/reducers/operations';

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form />
      <Todos />
      {todos.length > 0 && ( // Mengubah > 1 menjadi > 0 untuk menampilkan tombol DELETE ALL jika ada tugas
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
