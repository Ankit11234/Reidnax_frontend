import Login from './Components/Login';
import DashBoard from './Components/DashBoard';
import DashBoards from './Components/DashBoards';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<DashBoard/>} />
        <Route path='/data' element={<DashBoards/>} />
      </Routes>
    </div>
  );
}

export default App;
