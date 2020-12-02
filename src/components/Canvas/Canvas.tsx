import React, { useState, useEffect } from 'react';
import Row from '../Row/Row';
import { Tool } from '../App/App';
import './Canvas.css';

interface Props {
  numRows: number;
  numColumns: number;
  defaultPixelColor: string;
  drawColor: string;
}

const Canvas: React.FC<Props> = ({ numRows, numColumns, defaultPixelColor, drawColor }) => {
  // grid is a 2D array of strings (strings represent the hex color of a pixel)
  const [ grid, setGrid ] = useState<string[][]>(
    new Array(numRows).fill(new Array(numColumns).fill(defaultPixelColor))
  );

  // resets the grid when number of rows or columns changes
  useEffect(
    () => {
      setGrid(new Array(numRows).fill(new Array(numColumns).fill(defaultPixelColor)));
    },
    [ numRows, numColumns, defaultPixelColor ]
  );

  // colors the grid at the specified pixel
  const colorGridAt = (coord: { x: number; y: number }): void => {
    const { x, y } = coord;

    // deep clone the old grid
    var newGrid: string[][] = JSON.parse(JSON.stringify(grid));

    // color in the specific coord
    newGrid.forEach((row, row_y) => {
      if (row_y === y) {
        row[x] = drawColor;
      }
    });

    setGrid(newGrid);
  };

  // best not to use indices as the key prop, though will suffice for identifying rows
  return (
    <div className="Canvas">
      {grid.map((row, i) => <Row key={i} yCoord={i} pixels={row} colorGridAt={colorGridAt} />)}
    </div>
  );
};

export default Canvas;
