import { useState } from "react";

export default function App() {
  const [formValues, setFormValues] = useState({
    guestName: "",
    checkIn: "",
    checkOut: "",
    travelledFrom: "",
    messageToHost: "",
    favMoment: "",
    recommendations: "",
    rating: "",
  });
  //use the name attributes here

  function handleFormValuesChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }
  //event handler
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
    try {
      const res = await fetch(
        "http://localhost:8080/add-review",
        //these are part of the object being sent to my endpoint
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(formValues),
        }
      );
      if (!res.ok) {
        throw new Error("Network response failed!");
      }
    } catch (error) {
      console.error("problem with fetch", error);
    }
    //you will send the data to the server in here
  }

  return (
    <>
      <h1>Review Form</h1>

      <h2>Please leave your review</h2>
      {/* event listener --> onSubmit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="guestName">Guest Name(s)</label>
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder="Please enter your name"
          required
          value={formValues.guestName}
          onChange={handleFormValuesChange}
        />
        {/* event listener --> onChange */}

        <label htmlFor="checkIn">Check In Date</label>
        <input
          type="date"
          id="check-in"
          name="checkIn"
          value={formValues.checkIn}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="checkOut">Check Out Date</label>
        <input
          type="date"
          id="check-out"
          name="checkOut"
          value={formValues.checkOut}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="travelledFrom">Travelled From</label>
        <input
          type="text"
          id="travelled-from"
          name="travelledFrom"
          placeholder="Town, City or County"
          value={formValues.travelledFrom}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="messageToHost">Message to the Host</label>
        <input
          type="text"
          id="message-to-host"
          name="messageToHost"
          value={formValues.messageToHost}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="favMoment">Favourite Moments/Special Highlights</label>
        <input
          type="text"
          id="favourite-moments"
          name="favMoment"
          value={formValues.favMoment}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="recommendations">
          Places I/We Recommend - Restaurants - Entertainment - Must See Sights
        </label>
        <input
          type="text"
          id="recommendations"
          name="recommendations"
          value={formValues.recommendations}
          onChange={handleFormValuesChange}
        />
        <legend>Please rate your visit out of 5</legend>

        <label htmlFor="1-star">1 Star</label>
        <input
          type="radio"
          id="1-star"
          name="rating"
          value="1-star"
          checked={formValues.rating === "1-star"}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="2-star">2 stars</label>
        <input
          type="radio"
          id="2-star"
          name="rating"
          value="2-star"
          checked={formValues.rating === "2-star"}
          onChange={handleFormValuesChange}
        />

        <label htmlFor="3-star">3 stars</label>
        <input
          type="radio"
          id="3-star"
          name="rating"
          value="3-star"
          checked={formValues.rating === "3-star"}
          onChange={handleFormValuesChange}
        />

        <label htmlFor="4-star">4 stars</label>
        <input
          type="radio"
          id="4-star"
          name="rating"
          value="4-star"
          checked={formValues.rating === "4-star"}
          onChange={handleFormValuesChange}
        />

        <label htmlFor="5-star">5 stars</label>
        <input
          type="radio"
          id="5-star"
          name="rating"
          value="5-star"
          checked={formValues.rating === "5-star"}
          onChange={handleFormValuesChange}
        />

        <button type="submit">Submit your data!</button>
      </form>
      <p>Current guest name: {formValues.guestName}</p>
      <p>Check In Date: {formValues.checkIn}</p>
      <p>Check Out Date: {formValues.checkOut}</p>
      <p>Travlled From: {formValues.travelledFrom}</p>
      <p>Message To The Host: {formValues.messageToHost}</p>
      <p>Favourite Moments: {formValues.favMoment}</p>
      <p>Recommentdations: {formValues.recommendations}</p>
      <p>Rating: {formValues.rating}</p>
    </>
  );
}
