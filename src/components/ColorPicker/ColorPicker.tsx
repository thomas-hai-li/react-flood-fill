import React, { useState } from 'react';
import { GithubPicker, ColorResult } from 'react-color';
import './ColorPicker.css';

interface Props {
  defaultColor: string;
  setDrawColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorPicker: React.FC<Props> = ({ defaultColor, setDrawColor }) => {
  const [ displayColor, setDisplayColor ] = useState<string>(defaultColor);
  const [ displayPicker, setDisplayPicker ] = useState<boolean>(false);

  const handleClick = () => {
    setDisplayPicker(!displayPicker);
  };

  const handleClose = () => {
    setDisplayPicker(false);
  };

  const handleChange = (color: ColorResult) => {
    setDisplayColor(color.hex);
    setDrawColor(color.hex);
    setDisplayPicker(false);
  };

  return (
    <div className="ColorPicker">
      <div className="Swatch" onClick={handleClick}>
        <div className="SwatchColor" style={{ background: displayColor }} />
      </div>
      {displayPicker ? (
        <div className="Popover">
          <div className="Cover" onClick={handleClose} />
          <GithubPicker triangle="top-left" onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
