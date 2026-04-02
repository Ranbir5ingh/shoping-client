import React from 'react';

interface DialogTitleProps {
  children: React.ReactNode;
}

export const DialogTitle: React.FC<DialogTitleProps> = ({ children }) => {
  return (
    <h2 className="text-lg font-semibold leading-6 text-gray-900 mb-4">
      {children}
    </h2>
  );
};
