import React, { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Canvas from '../Canvas/Canvas';
import { Tool } from '../Toolbar/Toolbar';
import './App.css';

import {
  DEFAULT_NUM_ROWS,
  DEFAULT_NUM_COLUMNS,
  MAX_COLUMNS,
  MAX_ROWS,
  MIN_ROWS,
  MIN_COLUMNS,
  DEFAULT_DRAW_COLOR,
  DEFAULT_PIXEL_COLOR
} from '../../constants/defaults';

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
        setTool={setTool}
        canvasConstraints={{
          MAX_ROWS,
          MAX_COLUMNS,
          MIN_ROWS,
          MIN_COLUMNS
        }}
      />
      <Canvas
        numRows={numRows}
        numColumns={numColumns}
        defaultPixelColor={DEFAULT_PIXEL_COLOR}
        drawColor={drawColor}
        tool={tool}
      />
    </div>
  );
};

export default App;
