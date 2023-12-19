import './App.css';
import { Route,  Routes } from 'react-router-dom';
import Home from './component/Home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/ss' element={<Home />}></Route>
    </Routes>
  );
}

export default App;
