import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Download from "./pages/Download";
import Documentation from "./pages/Documentation";
import License from "./pages/License";
import Citation from "./pages/Citation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/download" element={<Download />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/license" element={<License />} />
      <Route path="/citation" element={<Citation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
