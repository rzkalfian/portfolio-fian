import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import ProjectPage from "./pages/project/ProjectPage";
import ServicePage from "./pages/service/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;