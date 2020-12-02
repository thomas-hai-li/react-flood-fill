import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import './Toolbar.css';

enum Tool {
  Pencil,
  Fill
}

interface Props {
  defaultDrawColor: string;
  numRows: number;
  numColumns: number;
  setNumRows: React.Dispatch<React.SetStateAction<number>>;
  setNumColumns: React.Dispatch<React.SetStateAction<number>>;
  setDrawColor: React.Dispatch<React.SetStateAction<string>>;
  setTool: React.Dispatch<React.SetStateAction<Tool>>;
  canvasConstraints: {
    MAX_ROWS: number;
    MAX_COLUMNS: number;
    MIN_ROWS: number;
    MIN_COLUMNS: number;
  };
}

const Toolbar: React.FC<Props> = ({
  defaultDrawColor,
  numRows,
  numColumns,
  setNumRows,
  setNumColumns,
  setDrawColor,
  setTool,
  canvasConstraints
}) => {
  const { MAX_ROWS, MAX_COLUMNS, MIN_ROWS, MIN_COLUMNS } = canvasConstraints;

  const handleNumRowsChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const num = parseInt(event.target.value);
    if (num < MIN_ROWS || num > MAX_ROWS || isNaN(num)) return;
    setNumRows(num);
  };

  const handleNumColumnsChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const num = parseInt(event.target.value);
    if (num < MIN_COLUMNS || num > MAX_COLUMNS || isNaN(num)) return;
    setNumColumns(num);
  };

  const handleToolChange = (tool: Tool): void => {
    setTool(tool);
  };

  return (
    <div className="Toolbar">
      <label>
        Rows
        <input type="number" value={numRows} min={MIN_ROWS} max={MAX_ROWS} onChange={handleNumRowsChange} />
      </label>
      <label>
        Columns
        <input type="number" value={numColumns} min={MIN_COLUMNS} max={MAX_COLUMNS} onChange={handleNumColumnsChange} />
      </label>
      <button onClick={() => handleToolChange(Tool.Pencil)}>🖌</button>
      <button onClick={() => handleToolChange(Tool.Fill)}>🌊</button>
      <ColorPicker defaultColor={defaultDrawColor} setDrawColor={setDrawColor} />
    </div>
  );
};

export { Toolbar as default, Tool };
