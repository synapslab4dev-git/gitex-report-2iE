import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <X size={16} />
        </button>

        {project.photos && project.photos.length > 0 && (
          <div className="modal-image-container">
            {project.photos.map((photo, idx) => (
              <img
                key={idx}
                className="modal-image"
                src={photo}
                alt={`${project.name} photo ${idx + 1}`}
              />
            ))}
          </div>
        )}

        <div className="modal-body">
          <div className="section-badge badge-2ie">{project.icon} {project.tagline}</div>
          <h2 className="modal-project-name">{project.name}</h2>
          <p className="modal-porteurs">
            <strong>{project.porteurs}</strong> — {project.role}
          </p>

          <div className="modal-description">
            {project.description.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph.trim()}</p>
            ))}
          </div>

          <div className="modal-tags">
            {project.tags.map((tag, i) => (
              <span className="modal-tag" key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
