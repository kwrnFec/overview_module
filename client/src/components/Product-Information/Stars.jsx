import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';

const Stars = ({ reviewsList }) => {
  const [rating, setRating] = useState(0);

  const handleRatingsAverage = () => {
    let total = 0;
    if (reviewsList.length === 0) {
      return;
    }
    for (let i = 0; i < reviewsList.length; i += 1) {
      let currentReview = reviewsList[i];
      total += currentReview.rating;
    }
    const averageRating = (total / reviewsList.length).toFixed(1);
    setRating(parseInt(averageRating));
  };

  useEffect(() => {
    handleRatingsAverage();
  }, [reviewsList]);

  const handleClickReviews = (e) => e.preventDefault();

  return (
    <div>
      <span>
        <Rating name="read-only" readOnly value={rating} precision={0.25} size="small" />
      </span>
      <span>
        <a href="/" onClick={(e) => handleClickReviews(e)} className="reviews-link">Read all reviews</a>
      </span>
    </div>
  );
};

export default Stars;
