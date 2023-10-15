import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import CreateTodo from './components/CreateTodo';
import ExistingTodo from './components/ExistingTodo';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<CreateTodo/>}/>
      <Route path='/existing' element={<ExistingTodo/>}/>
      <Route/>
    </Routes>
  );
}
export default App;
