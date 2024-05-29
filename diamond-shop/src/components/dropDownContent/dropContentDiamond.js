import React, { useState } from 'react';
import '../../css/dropContentDiamond.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../../css/dropContentDiamond.css'

const DropContentDiamond = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {/* Dropdown Button */}
        <p>Diamond</p>
        <KeyboardArrowDownIcon style={{color: 'black'}}></KeyboardArrowDownIcon>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item">Action</a>
          <a href="#" className="dropdown-item">Another action</a>
          <a href="#" className="dropdown-item">Something else here</a>
        </div>
      )}
    </div>
  );
};

export default DropContentDiamond;
