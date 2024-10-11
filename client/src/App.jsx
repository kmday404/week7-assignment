import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import reviewsData from "./lib/reviewsData.json";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-review" element={<Form />} />
        {/* <Route
          path="/reviews"
          element={reviewsData.map((review) => (
            <div key={review.id}>
              <FormPage
                id={review.id}
                name={review.guest_name}
                checkIn={review.check_in_date}
                checkOut={review.check_out_date}
                travelledFrom={review.travelled_from}
                messageToHost={review.message_to_host}
                favMoments={review.favourite_moment}
                recommendations={review.recommendations}
                rating={review.rating}
              />
            </div> */}
        {/* ))}
        /> */}
      </Routes>
    </>
  );
}
