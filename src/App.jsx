// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';
import './App.css';
import NaturePage2 from "./pages/NaturePage2.jsx";
import ArchitecturePage from "./pages/ArchitecturePage.jsx"


export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/nature" element={<NaturePage2 />} /> {/* target */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
