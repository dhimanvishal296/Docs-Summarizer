import {BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SummaryDisplay from "./components/SummaryDisplay";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/upload" />} />
        <Route path="/upload" element={<Home />} />
        <Route path="/summary/:fileName" element={<SummaryDisplay />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
