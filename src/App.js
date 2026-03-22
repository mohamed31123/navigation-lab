import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import About from './About';
import Auth from './Auth';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="titre">📱 Mon Tableau de Bord</h1>
      <nav style={{ margin: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '15px' }}>🏠 Accueil</Link>
        <Link to="/about">ℹ️ À propos</Link>
      </nav>
      <Auth />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;