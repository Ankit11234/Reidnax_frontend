import Login from './Components/Login';
import DashBoard from './Components/DashBoard';
import DashBoards from './Components/DashBoards';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/dashboard' element={<DashBoard/>} />
        <Route exact path='/data' element={<DashBoards/>} />
      </Routes>
    </div>
  );
}

export default App;
