import React from 'react';
import './DialogHeader.css';

interface DialogHeaderProps {
  title: string;
  onClose?: () => void;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="dialog-header">
      <h2 className="dialog-title">{title}</h2>
      {onClose && (
        <button className="dialog-close-button" onClick={onClose} aria-label="Close dialog">
          &times;
        </button>
      )}
    </div>
  );
};

export default DialogHeader;
