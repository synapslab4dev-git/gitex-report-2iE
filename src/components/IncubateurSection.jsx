import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { INCUBATEUR_INFO, PROJECTS } from '../data/content';
import ProjectModal from './ProjectModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
};

export default function IncubateurSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section-container" id="section-incubateur">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-badge badge-2ie">🏛️ Institut 2iE</div>
        <h2 className="section-title">{INCUBATEUR_INFO.title}</h2>
        <div className="section-divider" style={{ background: 'var(--c-blue)' }} />
      </motion.div>

      <motion.p
        className="incubateur-intro"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {INCUBATEUR_INFO.description}
      </motion.p>

      <motion.p
        className="incubateur-intro"
        style={{ marginBottom: 48 }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {INCUBATEUR_INFO.mission}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ marginBottom: 48, borderRadius: 16, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
      >
        <img src="/photos/jour3/jour3-40.jpg" alt="Délégation Incubateur 2iE au GITEX" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </motion.div>

      <motion.h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '22px',
          fontWeight: 600,
          marginBottom: 24,
          color: 'var(--c-text)'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projets de la délégation de 2iE (Boursiers SEP - Mastercard Foundation)
      </motion.h3>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            onClick={() => setSelectedProject(project)}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`project-card-icon ${project.color}`}>
              <span style={{ fontSize: 24 }}>{project.icon}</span>
            </div>
            <h4 className="project-card-title">{project.name}</h4>
            <p className="project-card-excerpt">{project.excerpt}</p>
            <div className="project-card-cta">
              Découvrir le projet <ArrowRight size={14} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
