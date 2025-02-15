"use client";


import { useEffect, useRef } from 'react';

const OutsideClickWrapper = ({ children, onClose, isOpen }) => {
    const wrapperRef = useRef(null);

    
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
          onClose();
        }
      };
      if (isOpen) {
        document.addEventListener('click', handleClickOutside);
      } else {
        document.removeEventListener('click', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isOpen, onClose]);

  return <div ref={wrapperRef} className={`${isOpen ? 'grid' : 'hidden'}`}>{children}</div>;
};

export default OutsideClickWrapper;
