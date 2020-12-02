import React, { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Canvas from '../Canvas/Canvas';
import './App.css';

enum Tool {
  Pencil,
  Fill
}

const DEFAULT_NUM_ROWS: number = 20;
const DEFAULT_NUM_COLUMNS: number = 20;
const MAX_ROWS: number = 50;
const MAX_COLUMNS: number = 50;
const MIN_ROWS: number = 1;
const MIN_COLUMNS: number = 1;

const DEFAULT_DRAW_COLOR: string = '#000000';
const DEFAULT_PIXEL_COLOR: string = '#ffffff';

const App: React.FC = () => {
  const [ numRows, setNumRows ] = useState<number>(DEFAULT_NUM_ROWS);
  const [ numColumns, setNumColumns ] = useState<number>(DEFAULT_NUM_COLUMNS);
  const [ drawColor, setDrawColor ] = useState<string>(DEFAULT_DRAW_COLOR);
  const [ tool, setTool ] = useState<Tool>(Tool.Pencil);

  return (
    <div className="App">
      <Toolbar
        defaultDrawColor={DEFAULT_DRAW_COLOR}
        numRows={numRows}
        numColumns={numColumns}
        setNumRows={setNumRows}
        setNumColumns={setNumColumns}
        setDrawColor={setDrawColor}
        canvasConstraints={{
          MAX_ROWS,
          MAX_COLUMNS,
          MIN_ROWS,
          MIN_COLUMNS
        }}
      />
      <Canvas numRows={numRows} numColumns={numColumns} defaultPixelColor={DEFAULT_PIXEL_COLOR} drawColor={drawColor} />
    </div>
  );
};

export { App as default, Tool };
