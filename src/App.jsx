import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PaintDetails from "./components/PaintDetails";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter basename="/van-gogh-gallery">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paint_details/:id" element={<PaintDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
