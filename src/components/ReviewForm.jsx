import React, { useState, useEffect } from 'react';

const ReviewForm = ({ onAddReview, editReview }) => {
    const [shopName, setShopName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(5);

    useEffect(() => {
        if (editReview) {
            setShopName(editReview.shopName);
            setReviewText(editReview.reviewText);
            setRating(editReview.rating);
        } else {
            setShopName("");
            setReviewText("");
            setRating(5);
        }
    }, [editReview]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!shopName.trim() || !reviewText.trim()) return;

        onAddReview({ shopName: shopName.trim(), reviewText: reviewText.trim(), rating });

        if (!editReview) {
            setShopName("");
            setReviewText("");
            setRating(5);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 max-w-lg mx-auto shadow-lg"
        >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                {editReview ? "Edit Your Review" : "Leave a Review"}
            </h2>

            <input
                type="text"
                placeholder="Shop Name"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                className="block w-full mb-6 px-5 py-3 text-lg rounded-lg border border-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-shadow"
                autoComplete="off"
            />

            <textarea
                placeholder="Your Review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="block w-full mb-6 px-5 py-3 text-lg rounded-lg border border-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 resize-y min-h-[120px] transition-shadow"
            />

            <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 text-lg">
                    Rating
                </label>
                <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full cursor-pointer px-5 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 text-lg transition-shadow bg-white appearance-none relative"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg fill='none' stroke='%23738eda' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3e%3c/path%3e%3c/svg%3e")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1.25em 1.25em",
                    }}
                >
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                            {num} Star{num > 1 && "s"}
                        </option>
                    ))}
                </select>

            </div>

            <button
                type="submit"
                className="w-full cursor-pointer py-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg text-white font-extrabold text-xl transition-colors shadow-lg"
            >
                {editReview ? "Update Review" : "Submit Review"}
            </button>
        </form>
    );
};

export default ReviewForm;
