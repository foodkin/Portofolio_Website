import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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
import Certificates from './components/Certificates';

import { Analytics } from "@vercel/analytics/react";

function App() {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      {/* ✅ SEO */}
      <Helmet>
        <title>Jeferson Portfolio | Web Developer</title>

        <meta
          name="description"
          content="Portfolio Jeferson - Web Developer yang fokus pada React, UI modern, dan pengalaman pengguna yang optimal."
        />
        <meta
          name="keywords"
          content="Jeferson, portfolio, web developer, react, frontend developer"
        />
        <meta name="author" content="Jeferson" />

        {/* Open Graph (Facebook, Discord, dll) */}
        <meta property="og:title" content="Jeferson Portfolio" />
        <meta
          property="og:description"
          content="Lihat portfolio dan project web development Jeferson."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://domainmu.com" />
        <meta property="og:image" content="https://domainmu.com/preview.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jeferson Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio Jeferson - Web Developer"
        />
        <meta name="twitter:image" content="https://domainmu.com/preview.png" />

        {/* SEO tambahan */}
        <link rel="canonical" href="https://domainmu.com" />
      </Helmet>

      <TopNavbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <main
        className={`
          mt-16 transition-all duration-300
          ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}
        `}
      >
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </main>

      {/* ✅ Analytics */}
      <Analytics />
    </div>
  );
}

export default App;