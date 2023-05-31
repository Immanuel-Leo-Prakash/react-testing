import "./App.css";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./Components/mui/MuiMode";
import { CounterTwo } from "./Components/counter-two/CounterTwo";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <CounterTwo count={0} />
      </div>
    </AppProviders>
  );
}

export default App;
