import React from 'react';

const ReviewCard = ({ review, onDelete, onEdit }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 max-w-md mx-auto hover:shadow-xl transition-shadow duration-300 relative flex flex-col">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-4">{review.shopName}</h2>

      <p className="text-yellow-500 text-xl mb-5">
        {"★".repeat(review.rating)}
        <span className="text-gray-300">{"★".repeat(5 - review.rating)}</span>
      </p>

      <p className="text-gray-800 italic font-bold mb-6 leading-relaxed">"{review.reviewText}"</p>

      <small className="block text-gray-600 text-center text-sm mb-6">
        {new Date(review.date).toLocaleString()}
      </small>

      <div className="flex justify-center space-x-6 mt-auto">
        <button
          onClick={() => onEdit(review)}
          className="px-6 cursor-pointer py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          aria-label="Edit Review"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(review.id)}
          className="px-6 cursor-pointer py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          aria-label="Delete Review"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
