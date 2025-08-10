import { useEffect, useState } from "react";
import { getReviews, saveReviews } from "./utils/utils";
import ReviewList from "./components/ReviewList";
import ReviewForm from "./components/ReviewForm";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editReviewData, setEditReviewData] = useState(null);  // for editing

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
    if (editReviewData) {
      // Update existing review
      setReviews((prev) =>
        prev.map((r) => (r.id === editReviewData.id ? { ...r, ...review } : r))
      );
      setEditReviewData(null);  // clear edit mode
    } else {
      // Add new review
      setReviews((prevReviews) => [
        { ...review, id: Date.now(), date: new Date() },
        ...prevReviews,
      ]);
    }
  };

  const deleteReview = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const startEditReview = (review) => {
    setEditReviewData(review);
  };

  return (
    <div className="container mx-auto p-4 pt-10 pb-20">
      <h1 className="text-2xl font-bold text-center mb-8">📦 From Cart to Heart</h1>
      <ReviewForm onAddReview={addReview} editReview={editReviewData} />
      <ReviewList
        reviews={reviews}
        onDelete={deleteReview}
        onEdit={startEditReview}
      />
    </div>
  );
};
export default Home