import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import IncubateurSection from './components/IncubateurSection';
import DaySection from './components/DaySection';
import GlobalReportSection from './components/GlobalReportSection';

const sectionIds = ['gitex', 'incubateur', 'jour1', 'jour2', 'jour3', 'rapport'];

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } }
};

function App() {
  const [activeSection, setActiveSection] = useState('gitex');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef(null);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Close sidebar on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'gitex':
        return <HeroSection />;
      case 'incubateur':
        return <IncubateurSection />;
      case 'jour1':
        return <DaySection dayIndex={0} />;
      case 'jour2':
        return <DaySection dayIndex={1} />;
      case 'jour3':
        return <DaySection dayIndex={2} />;
      case 'rapport':
        return <GlobalReportSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="main-content" ref={mainRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
