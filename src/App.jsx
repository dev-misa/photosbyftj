// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/collections" element={<CollectionsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
