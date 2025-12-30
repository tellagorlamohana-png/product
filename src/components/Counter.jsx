export default function Counter({ count, setCount }) {
  console.log("Counter rendered");

  return (
    <button onClick={() => setCount(count + 1)}>
      Counter: {count}
    </button>
  );
}
