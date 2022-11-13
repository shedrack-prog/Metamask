import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="App w-full ">
      <div>
        <Header />
      </div>
      <div className="w-fulll ">
        <Body />
      </div>
    </div>
  );
}

export default App;
