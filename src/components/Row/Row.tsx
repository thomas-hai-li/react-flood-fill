import React from 'react';
import Pixel from '../Pixel/Pixel';
import './Row.css';

interface Props {
  yCoord: number;
  pixels: string[];
  colorGridAt: (coord: { x: number; y: number }) => void;
}

const Row: React.FC<Props> = ({ yCoord, pixels, colorGridAt }) => {
  return (
    <div className="Row">
      {pixels.map((color, i) => {
        let xCoord = i;
        let coordKey = `(${xCoord}, ${yCoord})`;
        let coord = { x: xCoord, y: yCoord };

        return <Pixel key={coordKey} color={color} coord={coord} handleClick={() => colorGridAt(coord)} />;
      })}
    </div>
  );
};

export default Row;
