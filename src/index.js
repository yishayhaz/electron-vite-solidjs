import { createSignal } from "https://cdn.skypack.dev/solid-js";
import { render } from "https://cdn.skypack.dev/solid-js/web";
import html from "https://cdn.skypack.dev/solid-js/html";

const App = () => {
  const [count, setCount] = createSignal(0);

  return html`<div>
    <h1>Count: ${count}</h1>
    <button onclick=${() => setCount(count() + 1)}>Increment</button>
  </div>`;
};
render(App, document.getElementById("root"));
