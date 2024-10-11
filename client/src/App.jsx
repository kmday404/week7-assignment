import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/reviews" element={} />  */}
        <Route path="/add-review" element={<Form />} />
      </Routes>
    </>
  );
}
