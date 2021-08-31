export const addReview = (review) => {
  return {
    type: "ADD_REVIEW",
    review: review,
  };
};

export const deleteReview = (reviewId) => {
  return {
    type: "DELETE_REVIEW",
    reviewId: reviewId,
  };
};
