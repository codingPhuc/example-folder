export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.imagePath} alt="..."></img>
      <h3> {props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
