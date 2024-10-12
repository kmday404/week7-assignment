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
        <Route path="/reviews" element={<FormPage />} />

        {/* <Route
          path="/reviews"
          element={reviewsData.map((review) => (
            <div key={review.id}>
              <FormPage
                guest_name={review.guest_name}
                check_in_date={review.check_in_date}
                check_out_date={review.check_out_date}
                travelled_from={review.travelled_from}
                message_to_host={review.message_to_host}
                favourite_moments={review.favourite_moments}
                recommendations={review.recommendations}
                rating={review.rating}
              />
            </div>
          ))}
        /> */}
      </Routes>
    </>
  );
}
