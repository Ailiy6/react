import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 class="text-3xl bg-green-400 p-3 rounded-md">The man</h1>
      <Card username="Ailiy" post="CEO" />
      <Card />
      <Card />
    </>
  );
}

export default App;
