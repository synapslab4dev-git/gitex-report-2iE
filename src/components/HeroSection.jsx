import { motion } from 'framer-motion';
import { GITEX_INFO } from '../data/content';

export default function HeroSection() {
  return (
    <section className="hero-section" id="section-gitex">
      <div className="hero-bg">
        <img src="/photos/jour3/jour3-1.jpg" alt="GITEX Africa Morocco 2026" />
      </div>
      <div className="hero-gradient" />
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="hero-overline">{GITEX_INFO.edition} · {GITEX_INFO.lieu}</div>
          
          <h1 className="hero-title">
            GITEX Africa<br />
            <em>Morocco 2026</em>
          </h1>
          
          <p className="hero-description">
            {GITEX_INFO.description}
          </p>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          {GITEX_INFO.stats.map((stat, i) => (
            <div className="hero-stat" key={i}>
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
