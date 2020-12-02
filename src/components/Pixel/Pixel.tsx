import React, { useState } from 'react';
import './Pixel.css';

interface Props {
  color: string;
  coord: {
    x: number;
    y: number;
  };
  handleClick: () => void;
}

const Pixel: React.FC<Props> = ({ color, coord, handleClick }) => {
  const [ hovered, setHovered ] = useState<Boolean>(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const styleHovered = hovered ? 'Pixel--hovered' : '';
  return (
    <div
      className={`Pixel ${styleHovered}`}
      style={{ backgroundColor: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    />
  );
};

export default Pixel;
