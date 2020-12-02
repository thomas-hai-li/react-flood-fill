import React, { useState, useEffect } from 'react';
import Row from '../Row/Row';
import { Tool } from '../Toolbar/Toolbar';
import { Coordinate } from '../Pixel/Pixel';
import { drawCanvasWithPencil, drawCanvasWithFloodFill } from './CanvasDrawHelpers';
import './Canvas.css';

interface Props {
  numRows: number;
  numColumns: number;
  defaultPixelColor: string;
  drawColor: string;
  tool: Tool;
}

const Canvas: React.FC<Props> = ({ numRows, numColumns, defaultPixelColor, drawColor, tool }) => {
  // grid is a 2D array of strings (strings represent the hex color of a pixel at a specific coordinate)
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
  const drawCanvasAtCoordinate = (coord: Coordinate): void => {
    let newGrid: string[][];

    if (tool === Tool.Pencil) newGrid = drawCanvasWithPencil(coord, grid, drawColor);
    else if (tool === Tool.Fill) newGrid = drawCanvasWithFloodFill(coord, grid, drawColor);
    else newGrid = grid;

    setGrid(newGrid);
  };

  // best not to use indices as the key prop, though will suffice for identifying rows
  return (
    <div className="Canvas">
      {grid.map((row, i) => <Row key={i} yCoord={i} pixels={row} drawCanvasAtCoordinate={drawCanvasAtCoordinate} />)}
    </div>
  );
};

export default Canvas;
