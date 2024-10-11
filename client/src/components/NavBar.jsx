import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/reviews">Reviews</Link>
      <br />
      <Link to="/add-review">Add your review</Link>
    </>
  );
}
