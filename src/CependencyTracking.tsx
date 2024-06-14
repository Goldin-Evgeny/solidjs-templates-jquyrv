import { createSignal, createEffect } from 'solid-js';

const [count, setCount] = createSignal(0);

createEffect(() => {
  console.log(`Count is now ${count()}`);
});

setCount(1); // This will trigger the effect and log "Count is now 1"

const App: Component = () => {
  createEffect(() => {
    console.log(` ${featureOff()}`);

    if (featureOff() === true) {
      console.log(`Count is now ${title()}`);
    }
  });
  return (
    <div class={styles.App}>
      <main class={styles.header}>
        <h4>{title()}</h4>
        <button onClick={() => setTitle('And easy')}>Click me</button>
      </main>
    </div>
  );
};

export default App;
