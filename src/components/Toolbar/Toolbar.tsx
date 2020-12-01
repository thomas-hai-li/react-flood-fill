import React from 'react';
import './Toolbar.css';

interface Props {
  defaultColor: string;
  numRows: number;
  numColumns: number;
  setNumRows: React.Dispatch<React.SetStateAction<number>>;
  setNumColumns: React.Dispatch<React.SetStateAction<number>>;
  constants: {
    MAX_ROWS: number;
    MAX_COLUMNS: number;
    MIN_ROWS: number;
    MIN_COLUMNS: number;
  };
}

const Toolbar: React.FC<Props> = ({ defaultColor, numRows, numColumns, setNumRows, setNumColumns, constants }) => {
  const { MAX_ROWS, MAX_COLUMNS, MIN_ROWS, MIN_COLUMNS } = constants;

  const handleNumRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(event.target.value);
    if (num < MIN_ROWS || num > MAX_ROWS || isNaN(num)) return;
    setNumRows(num);
  };

  const handleNumColumnsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(event.target.value);
    if (num < MIN_COLUMNS || num > MAX_COLUMNS || isNaN(num)) return;
    setNumColumns(num);
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
    </div>
  );
};

export default Toolbar;
