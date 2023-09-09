import React, { useEffect, useRef } from 'react';
import './RangeSlider.css';

const RangeSlider: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);

  useEffect(() => {
    if (inputRef.current && labelRef.current) {
      const handleInput = () => {
        if (inputRef.current && labelRef.current) {
          const value = Number(inputRef.current.value) / 100;
          inputRef.current.style.setProperty('--thumb-rotate', `${value * 720}deg`);
          labelRef.current.innerHTML = Math.round(value * 10).toString();
        }
      };

      inputRef.current.addEventListener('input', handleInput);

      return () => {
        inputRef.current?.removeEventListener('input', handleInput);
      };
    }
  }, []);

  return (
    <div className='w-100 d-flex range-slider my-3'>
      <input
        id='slider'
        name='slider'
        type='range'
        defaultValue={0}
        ref={inputRef}
      />
      <label htmlFor='slider' ref={labelRef}>0</label>
    </div>
  );
};

export default RangeSlider;
