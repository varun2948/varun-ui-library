import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="frame h-auto w-auto text-center z-0">
      <div className="flex cards cont flex-col scroll-container justify-center items-center ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
