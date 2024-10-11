export default function FormPage(props) {
  return (
    <>
      <p>{props.id}</p>
      <p>{props.guest_name}</p>
      <p>{props.check_in_date}</p>
      <p>{props.check_out_date}</p>
      <p>{props.travelled_from}</p>
      <p>{props.message_to_host}</p>
      <p>{props.favourite_moment}</p>
      <p>{props.recommendations}</p>
      <p>{props.rating}</p>
    </>
  );
}
