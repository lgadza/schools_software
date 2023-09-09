import React from 'react';
import "./Buttons.css"
import { useNavigate } from 'react-router-dom';
export const PushButton: React.FC<{ message: string,url?:string }> = ({ message,url }) => {
  const navigate=useNavigate()
  return (
    <div id="push-btn" onClick={()=>{
       if(url)  return navigate(url)
    }}>
      <div className="push-btn">
        {message}
      </div>
    </div>
  );
};


