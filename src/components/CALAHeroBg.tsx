import React from 'react';
import './CALAHeroBg.css'; // Import your CSS file for styling

const CALAHeroBg: React.FC = () => {
  return (
    <div className="cala-hero container">
      {[1].map((val) => (
        <div key={val} className={`cell nucleus start n${val}`}>
        </div>
      ))}
      {[1, 2, 3, 4, 5].map((val) => (
        <div key={val} className={`cell neuron wave1 n${val}`}>
        </div>
      ))}
      {[1, 2, 3, 4, 5].map((val) => (
        <div key={val} className={`cell nucleus midlow n${val}`}>
        </div>
      ))}
      {[1, 2, 3, 4, 5].map((val) => (
        <div key={val} className={`cell neuron wave2 n${val}`}>
        </div>
      ))}
      {[1, 2, 3, 4, 5].map((val) => (
        <div key={val} className={`cell nucleus midhigh n${val}`}>
        </div>
      ))}
      {[1, 2].map((val) => (
        <div key={val} className={`cell neuron wave3 n${val}`}>
        </div>
      ))}
      {[1, 2].map((val) => (
        <div key={val} className={`cell nucleus finish n${val}`}>
        </div>
      ))}
    </div>
  );
};

export default CALAHeroBg;
