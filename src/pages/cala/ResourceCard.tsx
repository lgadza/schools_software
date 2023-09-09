// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ResourceRatingsAndReviews from '../../components/ResourceRatingsAndReviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

interface ResourceCardProps {
  id: number;
  title: string;
  thumbnail: string;
  isFavorite: boolean;
  onFavoriteToggle: (id: number, isFavorite: boolean) => void;
  onShare: (id: number) => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  id,
  title,
  thumbnail,
  isFavorite,
  onFavoriteToggle,
  onShare,
}) => {
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onFavoriteToggle(id, !isFavorite);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onShare(id);
  };
//   const [rating, setRating] = useState<number>(5);
//   const [review, setReview] = useState<string>('');
//   const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newRating = parseInt(e.target.value);
//     setRating(newRating);
//   };

//   const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setReview(e.target.value);
//   };
// const onRatingSubmit=(id:string,rating:number)=>{
//     // 
// }
// const onReviewSubmit=(id:string,review:number)=>{
//     // 
// }
//   const handleSubmitRating = (id:string,rating:number) => {
//     onRatingSubmit(id, rating);
//   };

//   const handleSubmitReview = (id:string,review:number) => {
//     onReviewSubmit(id, review);
//     setReview(''); 
//   };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Link to={`/mss/resource/${id}`} className="content_bg">
        <img src={thumbnail} className="card-img-top" alt={title} />
        <div className="card-body content_bg">
          <h6 className="card-title d-flex">{title}</h6>
          <small className='d-flex'>Its a  very good CALA</small>
          <div className="d-flex justify-content-between">
            <small className='text-muted'>20-09-23</small>
              <div>
              <FontAwesomeIcon className='px-3' icon={faHeart} style={{color:`${isFavorite?"red":""}`}} onClick={handleFavoriteToggle}/>
            <FontAwesomeIcon icon={faShare} style={{color:"header"}} onClick={handleShare}/>
              </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResourceCard;
