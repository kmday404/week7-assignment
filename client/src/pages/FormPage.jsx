import { useState, useEffect } from "react";
import "./FormPage.css";

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
    <>
      <h1>Reviews</h1>

      <h2>Here you can view what others think of us</h2>

      <div id="review-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="guest-details">
                <h3>{review.guest_name}</h3>
                <p>
                  <span>Check-in: {review.check_in_date}</span>
                  <span>Check-out: {review.check_out_date}</span>
                </p>
                <p>From: {review.travelled_from}</p>
              </div>
            </div>

            <div className="review-body">
              <div className="section">
                <h4>Message to the Host</h4>
                <p>{review.message_to_host}</p>
              </div>
              <div className="section">
                <h4>Favourite Moments</h4>
                <p>{review.favourite_moments}</p>
              </div>
              <div className="section">
                <h4>Places I/We Recommend</h4>
                <p>{review.recommendations}</p>
              </div>
            </div>

            <div className="rating">
              <p>Rating: {review.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
