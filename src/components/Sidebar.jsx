import { motion } from 'framer-motion';
import { Globe, Building2, CalendarDays, FileText, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'gitex', label: 'GITEX Africa 2026', icon: Globe },
  { id: 'incubateur', label: 'Incubateur 2iE', icon: Building2 },
  { id: 'jour1', label: 'Jour 1 — 07 Avril', icon: CalendarDays },
  { id: 'jour2', label: 'Jour 2 — 08 Avril', icon: CalendarDays },
  { id: 'jour3', label: 'Jour 3 — 09 Avril', icon: CalendarDays },
  { id: 'rapport', label: 'Rapport Global', icon: FileText },
];

export default function Sidebar({ activeSection, onNavigate, isOpen, onToggle }) {
  return (
    <>
      {/* Mobile toggle button */}
      <button className="mobile-toggle" onClick={onToggle} aria-label="Toggle menu">
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar overlay on mobile */}
      {isOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)',
            zIndex: 99, display: 'none'
          }}
          className="sidebar-backdrop"
          onClick={onToggle}
        />
      )}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
            <img src="/logo.jpg" alt="Logo 2iE" style={{ width: '80px', height: 'auto' }} />
            <div className="sidebar-logo-text" style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--color-dark)' }}>
              Rapport de mission GITEX Africa 2026
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`sidebar-nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  onNavigate(item.id);
                  if (window.innerWidth <= 768) onToggle();
                }}
              >
                <Icon className="nav-icon" size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          Institut 2iE · Ouagadougou, Burkina Faso
        </div>
      </aside>

      {/* Mobile backdrop styles */}
      <style>{`
        @media (max-width: 768px) {
          .sidebar-backdrop { display: block !important; }
        }
      `}</style>
    </>
  );
}
