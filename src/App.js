import Home from "./pages/Home";
import Header from "./components/header";
import About from "./pages/About";
import Menu from "./pages/Menu";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
