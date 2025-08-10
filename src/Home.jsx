import React, { useEffect, useState } from "react";
import { getReviews, saveReviews } from "./utils/utils";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");  // <-- new search state

  useEffect(() => {
    const storedReviews = getReviews();
    setReviews(storedReviews);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveReviews(reviews);
    }
  }, [reviews, isLoaded]);

  const addReview = (review) => {
    setReviews((prevReviews) => [
      { ...review, id: Date.now(), date: new Date() },
      ...prevReviews,
    ]);
  };

  const filteredReviews = reviews.filter((review) =>
    review.shopName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 pt-10 pb-20">
      <h1 className="text-2xl font-bold text-center mb-8">📦 From Cart to Heart</h1>

      <input
        type="text"
        placeholder="Search by Shop Name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 w-full max-w-md mx-auto block px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
      />

      <ReviewForm onAddReview={addReview} />
      <ReviewList reviews={filteredReviews} />
    </div>
  );
};

export default Home;
