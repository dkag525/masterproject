import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import BankDash from "./Page/BankDash/BankDash";
import Calculator from "./Page/Calculator/Calculator";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bankdash" element={<BankDash />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
