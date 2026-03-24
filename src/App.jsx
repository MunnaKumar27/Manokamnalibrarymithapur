import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import FaqPage from "./pages/FaqPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import TimingPage from "./pages/TimingPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/timing" element={<TimingPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
