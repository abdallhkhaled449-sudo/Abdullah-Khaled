import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TodoApp from "./pages/projects/TodoApp";
import WeatherApp from "./pages/projects/WeatherApp";
import EcommerceApp from "./pages/projects/EcommerceApp";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/todo" element={<TodoApp />} />
        <Route path="/projects/weather" element={<WeatherApp />} />
        <Route path="/projects/ecommerce" element={<EcommerceApp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
