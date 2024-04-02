import "./App.css";
import CarouselContainer from "./components/CarouselContainer";

const slides = [
  { key: 1, content: "1" },
  { key: 2, content: "2" },
  { key: 3, content: "2" },
  { key: 4, content: "3" },
  { key: 5, content: "4" },
  { key: 6, content: "5" },
  { key: 7, content: "6" },
  { key: 8, content: "7" },
];
function App() {
  return <CarouselContainer slides={slides} />;
}

export default App;
