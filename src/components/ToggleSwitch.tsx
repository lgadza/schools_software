import React, { useState } from 'react';
import './ToggleSwitch.css'; // Import your CSS file for styling

const ToggleSwitch: React.FC = () => {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleToggle1 = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };

  const handleToggle2 = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };

  return (
    <div className="toggle_switcher d-flex align-items-center">
      <div className="toggle">
        <input type="checkbox" checked={isChecked1} onChange={handleToggle1} />
        <span className="button no"></span>
        <small className="label">No</small>
      </div>
      <div className="toggle">
        <input type="checkbox" checked={isChecked2} onChange={handleToggle2} />
        <span className="button yes"></span>
        <small className="label">Yes</small>
      </div>
    </div>
  );
};

export default ToggleSwitch;
