import React, { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Canvas from '../Canvas/Canvas';
import './App.css';

const DEFAULT_NUM_ROWS: number = 20;
const DEFAULT_NUM_COLUMNS: number = 20;
const MAX_ROWS: number = 50;
const MAX_COLUMNS: number = 50;
const MIN_ROWS: number = 2;
const MIN_COLUMNS: number = 2;

const DEFAULT_COLOR: string = '#000';

const App: React.FC = () => {
  const [ numRows, setNumRows ] = useState<number>(DEFAULT_NUM_ROWS);
  const [ numColumns, setNumColumns ] = useState<number>(DEFAULT_NUM_COLUMNS);
  const [ color, setColor ] = useState<string>(DEFAULT_COLOR);

  return (
    <div className="App">
      <Toolbar
        defaultColor="#000"
        numRows={numRows}
        numColumns={numColumns}
        setNumRows={setNumRows}
        setNumColumns={setNumColumns}
        constants={{
          MAX_ROWS,
          MAX_COLUMNS,
          MIN_ROWS,
          MIN_COLUMNS
        }}
      />
      <Canvas numRows={numRows} numColumns={numColumns} />
    </div>
  );
};

export default App;
