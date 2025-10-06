
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CareerPage from './pages/CareerPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fffbee]">
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareerPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
