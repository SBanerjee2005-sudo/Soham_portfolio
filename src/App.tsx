import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { Footer } from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-textPrimary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
