import React from 'react';
import './ToggleSwitch.css'; // Import your CSS file for styling

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <div className="toggle_switcher d-flex align-items-center">
      <div className={`toggle ${checked ? 'checked' : ''}`}>
        <input type="checkbox" checked={checked} onChange={handleToggle} />
        <span className="button"></span>
        <small className={`label`}>{checked ? 'Yes' : 'No'}</small>
      </div>
    </div>
  );
};

export default ToggleSwitch;
