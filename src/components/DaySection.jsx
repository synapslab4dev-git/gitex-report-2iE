import { useState } from 'react';
import { motion } from 'framer-motion';
import { DAYS } from '../data/content';

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
};

export default function DaySection({ dayIndex }) {
  const day = DAYS[dayIndex];
  const [lightboxSrc, setLightboxSrc] = useState(null);

  if (!day) return null;

  const dayColors = ['var(--c-red)', 'var(--c-yellow)', 'var(--c-green)'];
  const accentColor = dayColors[dayIndex] || 'var(--c-blue)';

  return (
    <section className="section-container" id={`section-${day.id}`}>
      {/* Header image */}
      <motion.div
        className="day-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <img src={day.headerImage} alt={day.title} />
        <div className="day-header-overlay">
          <div className="day-header-date">{day.date}</div>
          <h2 className="day-header-title">Jour {day.number} — {day.title}</h2>
        </div>
      </motion.div>

      {/* Quote */}
      {day.quote && (
        <motion.div
          className="quote-card"
          style={{ borderLeftColor: accentColor }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>« {day.quote.text} »</p>
          <cite>— {day.quote.author}</cite>
        </motion.div>
      )}

      {/* Timeline */}
      <motion.div
        className="timeline"
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {day.events.map((event, i) => (
          <motion.div className="timeline-item" key={i} variants={itemVariants}>
            <div className="timeline-dot" style={{ borderColor: accentColor }} />
            <div className="timeline-time">{event.time}</div>
            <div className="timeline-card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              {event.image && (
                <img
                  className="timeline-card-image"
                  src={event.image}
                  alt={event.title}
                  onClick={() => setLightboxSrc(event.image)}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Photo gallery */}
      {day.galleryPhotos && day.galleryPhotos.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '20px',
            fontWeight: 600,
            marginTop: 48,
            marginBottom: 16,
            color: 'var(--c-text)'
          }}>
            Galerie photos
          </h3>
          <div className="photo-grid">
            {day.galleryPhotos.map((photo, i) => (
              <img
                key={i}
                src={photo}
                alt={`${day.title} - photo ${i + 1}`}
                onClick={() => setLightboxSrc(photo)}
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Lightbox */}
      {lightboxSrc && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxSrc(null)}
        >
          <img src={lightboxSrc} alt="Lightbox" />
        </motion.div>
      )}
    </section>
  );
}
