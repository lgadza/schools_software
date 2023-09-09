import { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [isFilling, setIsFilling] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFilling((prev) => !prev);
    }, 3000); // 6 seconds for the entire life cycle (filling and emptying)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <div className="bar" style={{ backgroundColor: isFilling ? 'blue' : 'blue' }} />
      <div className="bar bar-2" style={{ backgroundColor: isFilling ? 'blue' : 'blue' }} />
      <div className="circle mx-3" style={{ backgroundColor: isFilling ? 'blue' : 'blue' }} />
    </div>
  );
};

export default Loader;
