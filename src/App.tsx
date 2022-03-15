import './App.css';
import { NavHeader } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavHeader></NavHeader>
      <Outlet />
    </div>
  );
}

export default App;
