import { createSignal } from "solid-js";
import { render } from "solid-js/web";

const App = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h1>Count: {count()}</h1>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
    </div>
  );
};

render(App, document.getElementById("root"));
