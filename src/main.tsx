/* trunk-ignore-all(prettier) */
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import BestService from "./pages/Best";
import WhyChooseUs from "./pages/WhyUs";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/best" element={<BestService />} />
      <Route path="/why-us" element={<WhyChooseUs />} />
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  </BrowserRouter>
);
