// src/components/ResourceRatingsAndReviews.tsx
import React, { useState } from 'react';

interface ResourceRatingsAndReviewsProps {
  resourceId: number;
  initialRating: number;
  initialReviews: string[];
  // onRatingSubmit: (resourceId: number, rating: number) => void;
  // onReviewSubmit: (resourceId: number, review: string) => void;
}

const ResourceRatingsAndReviews: React.FC<ResourceRatingsAndReviewsProps> = ({
  resourceId,
  initialRating,
  initialReviews,
  // onRatingSubmit,
  // onReviewSubmit,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState(initialReviews);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    // onRatingSubmit(resourceId, newRating);
  };
console.log(resourceId)
  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = () => {
    if (review) {
      setReviews([...reviews, review]);
      // onReviewSubmit(resourceId, review);
      setReview('');
    }
  };

  return (
    <div className='d-flex flex-column align-items-start'>
      <div>
        <p className='d-flex'>Rating: {rating}</p>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < rating ? 'star filled' : 'star'}
              onClick={() => handleRatingChange(index + 1)}
            />
          ))}
        </div>
      </div>
      <div className="mt-3">
        <h5 className='d-flex'>Reviews:</h5>
        <ul className='d-flex flex-column align-items-start'>
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
        <div className="mb-3">
          <label htmlFor="review d-flex">Write a Review:</label>
          <textarea
            id="review"
            className="form-control"
            value={review}
            onChange={handleReviewChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleReviewSubmit}>Submit Review</button>
      </div>
    </div>
  );
};

export default ResourceRatingsAndReviews;
