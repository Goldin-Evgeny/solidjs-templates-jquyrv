import type { Component } from 'solid-js';
import styles from './App.module.css';
import { createSignal, createEffect } from 'solid-js';

const [title, setTitle] = createSignal<string>('Signals are intriguing');
const [featureOff, setFeaterOff] = createSignal(true);
setFeaterOff(false);
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
