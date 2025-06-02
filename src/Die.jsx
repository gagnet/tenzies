export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "red" : "blue",
  };
  return (
    <button onClick={props.hold} style={styles}>
      {props.value}
    </button>
  );
}
