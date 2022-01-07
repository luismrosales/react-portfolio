import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  function currentPage() {
    if (page === 1) {
      return <About></About>;
    }
    if (page === 2) {
      return <Project></Project>;
    }
    if (page === 3) {
      return <Contact></Contact>;
    }
    if (page === 4) {
      return <Resume></Resume>;
    }
  }
  return (
    <>
      <Header setPage={setPage}></Header>
      {currentPage()}
      <Footer className="footer"></Footer>
    </>
  );
}

export default App;
