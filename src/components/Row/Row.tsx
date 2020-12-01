import React from 'react';
import Pixel from '../Pixel/Pixel';
import './Row.css';

interface Props {
  numPixels: number;
  yCoord: number;
}

const Row: React.FC<Props> = ({ numPixels, yCoord }) => {
  const pixels = [];
  for (let i = 0; i < numPixels; i++) {
    // best not to use indices as the key prop, though may suffice for since they're coordinates
    let xCoord = i;
    let coordKey = `(${xCoord}, ${yCoord})`;
    pixels.push(<Pixel key={coordKey} />);
  }

  return <div className="Row">{pixels}</div>;
};

export default Row;
