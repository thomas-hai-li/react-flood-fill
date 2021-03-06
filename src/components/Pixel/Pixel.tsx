import React, { useState } from 'react';
import './Pixel.css';

export interface Coordinate {
  x: number;
  y: number;
}

interface Props {
  color: string;
  coord: Coordinate;
  drawCanvasAtCoordinate: (coord: Coordinate) => void;
}

const Pixel: React.FC<Props> = ({ color, coord, drawCanvasAtCoordinate }) => {
  const [ hovered, setHovered ] = useState<Boolean>(false);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  const handleClick = (): void => {
    drawCanvasAtCoordinate(coord);
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
