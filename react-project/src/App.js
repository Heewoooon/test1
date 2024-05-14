import './App.css';
import {Router, Route, Link} from 'react-router-dom'


import List from './components/List';
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <div>
    <Routes>
      <Route path = '/' element={<Main/>}></Route>
      <Route path = '/list' element={<List/>}></Route>
      <Route path = '/login' element={<Login/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
