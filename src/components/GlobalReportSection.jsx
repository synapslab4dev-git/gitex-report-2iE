import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { GLOBAL_REPORT } from '../data/content';

const highlightVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

export default function GlobalReportSection() {
  return (
    <section className="section-container" id="section-rapport">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-badge badge-report">📋 Synthèse</div>
        <h2 className="section-title">{GLOBAL_REPORT.title}</h2>
        <div className="section-divider" style={{ background: 'var(--c-yellow)' }} />
      </motion.div>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {GLOBAL_REPORT.intro}
      </motion.p>

      {/* Highlight cards */}
      <motion.div
        className="report-highlights"
        variants={highlightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {GLOBAL_REPORT.highlights.map((h, i) => {
          const colors = ['var(--c-blue)', 'var(--c-green)', 'var(--c-red)'];
          return (
            <motion.div
              className="report-highlight-card"
              key={i}
              variants={cardVariant}
              style={{ borderTop: `3px solid ${colors[i]}` }}
            >
              <div className="report-highlight-value" style={{ color: colors[i] }}>
                {h.value}
              </div>
              <div className="report-highlight-label">{h.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Report text sections */}
      <div className="report-text">
        {GLOBAL_REPORT.sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Download button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ marginTop: 48, textAlign: 'center' }}
      >
        <a
          href={`/${GLOBAL_REPORT.pdfFilename}`}
          download
          className="download-btn"
        >
          <Download size={20} />
          Télécharger le Rapport Officiel (PDF)
        </a>
        <p style={{
          fontSize: 13,
          color: 'var(--c-text-secondary)',
          marginTop: 12
        }}>
          Document officiel de la mission — Format PDF
        </p>
      </motion.div>
    </section>
  );
}
