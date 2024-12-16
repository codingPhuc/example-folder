export default function TabButton({ children, onSelect }) {
  function handleClick() {
    console.log("hello  world!");
  }
  // you much not add a () into the pass prop function
  // if you add () the code inside it will execute when the code is executed
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
