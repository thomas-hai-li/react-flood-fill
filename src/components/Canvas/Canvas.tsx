import React from 'react';
import Row from '../Row/Row';
import './Canvas.css';

interface Props {
  numRows: number;
  numColumns: number;
}

const Canvas: React.FC<Props> = ({ numRows, numColumns }) => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    // best not to use indices as the key prop, though will suffice for identifying rows
    rows.push(<Row key={i} yCoord={i} numPixels={numColumns} />);
  }

  return <div className="Canvas">{rows}</div>;
};

export default Canvas;
