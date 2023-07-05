import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <div>
      <Navbar />
      <News pageSize={6} country="in" category="science" />
    </div>
  );
}

export default App;
