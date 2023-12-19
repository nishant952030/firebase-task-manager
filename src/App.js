
import { useContext } from 'react';
import './App.css';
import EditTodo from './components/EditTodo';
import Sidebar from './components/Header';
import Main from './components/Main';
import Todos from './components/Todos';
import { redirect } from 'react-router-dom';
import { TodoContext } from './context';
import { useNavigate } from 'react-router-dom';
function App() {
  const { authorize } = useContext(TodoContext);
  const navigate = useNavigate();
  if (!authorize) {
    navigate('/')
    return null;
  }
  return (
    <div className="App">
      <Sidebar/> 
      <Main/>
    </div>
  );
}

export default App;
