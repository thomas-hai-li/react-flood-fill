import React from 'react';
import Pixel, { Coordinate } from '../Pixel/Pixel';
import './Row.css';

interface Props {
  yCoord: number;
  pixels: string[];
  drawCanvasAtCoordinate: (coord: Coordinate) => void;
}

const Row: React.FC<Props> = ({ yCoord, pixels, drawCanvasAtCoordinate }) => {
  return (
    <div className="Row">
      {pixels.map((color, i) => {
        let xCoord = i;
        let coordKey = `(${xCoord}, ${yCoord})`;
        let coord = { x: xCoord, y: yCoord };

        return <Pixel key={coordKey} color={color} coord={coord} drawCanvasAtCoordinate={drawCanvasAtCoordinate} />;
      })}
    </div>
  );
};

export default Row;
