export const getReviews = () => {
  const data = localStorage.getItem("reviews");
  return data ? JSON.parse(data) : [];
};

export const saveReviews = (reviews) => {
  localStorage.setItem("reviews", JSON.stringify(reviews));
};