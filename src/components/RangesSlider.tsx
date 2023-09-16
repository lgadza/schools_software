import React, { useEffect, useRef } from 'react';
import './RangeSlider.css';

interface RangeSliderProps {
  onTemperatureChange: (temperature: number) => void;
  currentTemperature:number | null
}

const RangeSlider: React.FC<RangeSliderProps> = ({ onTemperatureChange,currentTemperature }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);
console.log(currentTemperature,"we have to fix range here")
  useEffect(() => {
    const handleInput = () => {
      if (inputRef.current && labelRef.current) {
        const value = Number(inputRef.current.value) / 100;
        inputRef.current.style.setProperty('--thumb-rotate', `${value * 720}deg`);
        labelRef.current.innerHTML = Math.round(value * 10).toString();
        onTemperatureChange(value); 
      }
    };

    if (inputRef.current && labelRef.current) {
      inputRef.current.addEventListener('input', handleInput);

      return () => {
        inputRef.current?.removeEventListener('input', handleInput);
      };
    }
  }, [onTemperatureChange]);
  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.value = currentTemperature !== null ? (currentTemperature * 100).toString() : '0';
  //   }
  // }, [currentTemperature]);

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
