import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login';
import Choose from './pages/Choose';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/choose" element={ <Choose /> } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
