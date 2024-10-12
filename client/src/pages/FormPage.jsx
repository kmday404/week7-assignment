export default function FormPage(props) {
  return (
    <div id="review-container">
      <p>{props.id}</p>
      <h3>{props.guest_name}</h3>
      <p>{props.check_in_date}</p>
      <p>{props.check_out_date}</p>
      <p>{props.travelled_from}</p>
      <p>{props.message_to_host}</p>
      <p>{props.favourite_moments}</p>
      <p>{props.recommendations}</p>
      <p>{props.rating}</p>
    </div>
  );
}
