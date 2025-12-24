import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './store/taskContext';
import Header from './components/Header';
import Home from './pages/Home';
import Stats from './pages/Stats';
import './styles/global.css';

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </Router>
      </div>
    </TaskProvider>
  );
}

export default App;
