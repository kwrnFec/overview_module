import React, { useState, useEffect } from 'react';

const Foo = ({ reviewsList }) => {
  const [rating, setRating] = useState(3.75);

  // const handleRatingsAverage = () => {
  //   let total = 0;
  //   for (let i = 0; i < reviewsList.length; i += 1) {
  //     let currentReview = reviewsList[i];
  //     console.log('currentReview: ', currentReview);
  //     total += currentReview.rating;
  //   }
  //   const averageRating = (total / reviewsList.length).toFixed(1);
  //   setRating(averageRating);
  // };

  // useEffect(() => {
  //   handleRatingsAverage();
  // }, [rating]);

  console.log('avgRating: ', rating);

  return (
    <div>
      <span>
        hey
      </span>
      <span>
        <a>Read all reviews</a>
      </span>
    </div>
  );
};

export default Foo;
