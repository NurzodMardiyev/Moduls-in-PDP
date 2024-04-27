import GeneralApp from "./components/GenApp/GeneralApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GeneralApp />
      </header>
    </div>
  );
}

export default App;
// https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value}&units=metric&appid=b74e14ed8881d5d4fde1a122b220b3a6
