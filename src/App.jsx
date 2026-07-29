// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';
import './App.css';
import NaturePage2 from "./pages/NaturePage2.jsx";
import ArchitecturePage from "./pages/ArchitecturePage.jsx"
import StreetPage from './pages/StreetPage.jsx';
import LandscapePage from './pages/LandscapePage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';


export default function App() {
  return (
    <div>
      <ScrollToTop/>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/nature" element={<NaturePage2 />} /> 
          <Route path="/collections/architecture" element={<ArchitecturePage />} />
          <Route path="/collections/street" element={<StreetPage />} />
          <Route path="/collections/landscape" element={<LandscapePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
