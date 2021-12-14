import './App.css';
import Provider from './provider/Provider';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login';
import Choose from './pages/Choose';
import Game from './pages/Game';

function App() {
  return (
    <div className="App">
        <Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Login /> } />
              <Route path="/choose" element={ <Choose /> } />
              <Route path="/game" element={ <Game /> } />
            </Routes>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
