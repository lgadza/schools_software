// src/components/FavoriteResourceCard.tsx
import React from 'react';

interface FavoriteResourceCardProps {
  id: number;
  title: string;
  thumbnail: string;
  isFavorite: boolean;
  onFavoriteToggle: (id: number, isFavorite: boolean) => void;
}

const FavoriteResourceCard: React.FC<FavoriteResourceCardProps> = ({
  id,
  title,
  thumbnail,
  isFavorite,
  onFavoriteToggle,
}) => {
  const handleFavoriteToggle = () => {
    onFavoriteToggle(id, !isFavorite);
  };

  return (
    <div className="card p-0">
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <button
          className={`btn btn-${isFavorite ? 'danger' : 'primary'}`}
          onClick={handleFavoriteToggle}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default FavoriteResourceCard;
