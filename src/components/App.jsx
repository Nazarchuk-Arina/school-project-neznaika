import { Route, Routes } from "react-router-dom";
import Heroes from "../pages/Heroes/Heroes";
import Read from "../pages/Read/Read.jsx";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home.jsx";
import ReadChapter from "../components/ReadChapter/ReadChapter.jsx";
import Play from "../pages/Play/Play.jsx";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton.jsx";

const App = () => {
  return (
    <div>
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/read" element={<Read />} />

        <Route path="/read/:readId" element={<ReadChapter />} />
        <Route path="/play" element={<Play />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
