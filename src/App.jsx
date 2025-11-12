import { useState, useEffect } from 'react';
import TopNavbar from './components/TopNavbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Aktifkan smooth scroll
  useSmoothScroll();

  useEffect(() => {
    // Simulasi loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      {/* Top Navbar dengan tombol toggle */}
      <TopNavbar toggleSidebar={toggleSidebar} />

      {/* Sidebar dengan state open/close */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content - Responsive padding */}
      <main className={`
        mt-16 transition-all duration-300
        ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}
      `}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;