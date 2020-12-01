import React, { useState } from 'react';
import './Pixel.css';

const Pixel: React.FC = () => {
  const [ hovered, setHovered ] = useState<Boolean>(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const styleHovered = hovered ? 'Pixel--hovered' : '';
  return <div className={`Pixel ${styleHovered}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />;
};

export default Pixel;
