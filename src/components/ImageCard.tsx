import React from 'react';
import "./ImageCard.css"
interface ImageCardProps {
  context: string;
  imageUrl: string;
  altText: string;
}

const ImageCard: React.FC<ImageCardProps> = ({  imageUrl, altText }) => {
  return (
    
      <div className="image--card">
        <div className="image--card--top">
          <img className="img_component image--card--top" src={imageUrl} alt={altText} 
           style={{width: `${100}%`, height: `${100}%`, objectFit:"cover" }}/>
        </div>
        <div className="image--card--bottom">
          <div className="px-3 d-flex align-items-center justify-content-between">
          </div>
        </div>
      </div>
    
  );
};

export default ImageCard;
