import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewList = ({ reviews, onDelete, onEdit }) => {
  if (reviews.length === 0) {
    return <p className="text-gray-700 text-center py-20">No reviews yet. Be the first!</p>;
  }

  return (
    <div className="py-10 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
