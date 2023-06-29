import css from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ onClose, src, alt }) => {
  const handleOutsideClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    console.log(1);
    const closeOnEsc = e => {
      if (e.key === 'Escape') {
        console.log('hello');
        onClose();
      }
    };
    document.addEventListener('keydown', closeOnEsc);
    return () => document.removeEventListener('keydown', closeOnEsc);
  }, [onClose]);

  return (
    <div className={css.Overlay} onClick={handleOutsideClick}>
      <div className={css.Modal}>
        <img src={src} alt={alt} width="800px" height="600px" />
      </div>
    </div>
  );
};
