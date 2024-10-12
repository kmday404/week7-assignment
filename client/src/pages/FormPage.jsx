import { useState, useEffect } from "react";

export default function FormPage(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const renderReviews = async () => {
      try {
        const response = await fetch("http://localhost:8080/reviews");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    renderReviews();
  }, []);

  return (
    <div id="review-container">
      {reviews.map((review) => (
        <div key={review.id}>
          <h3>{review.guest_name}</h3>
          <p>Check-in: {review.check_in_date}</p>
          <p>Check-out: {review.check_out_date}</p>
          <p>From: {review.travelled_from}</p>
          <p>Message to host: {review.message_to_host}</p>
          <p>Favourite moments: {review.favourite_moments}</p>
          <p>Recommendations: {review.recommendations}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}

      {/* <p>{props.id}</p>
      <h3>{props.guest_name}</h3>
      <p>{props.check_in_date}</p>
      <p>{props.check_out_date}</p>
      <p>{props.travelled_from}</p>
      <p>{props.message_to_host}</p>
      <p>{props.favourite_moments}</p>
      <p>{props.recommendations}</p>
      <p>{props.rating}</p> */}
    </div>
  );
}
