import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Heroes from "../pages/Heroes/Heroes";
import Read from "../pages/Read/Read.jsx";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home.jsx";
import ReadDetails from "../pages/ReadDetails/ReadDetails.jsx";
import ReadChapter from "../components/ReadChapter/ReadChapter.jsx";

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path="read" element={<Read />} />
          <Route path="read/:readId" element={<ReadDetails />}>
            <Route path="chapter" element={<ReadChapter />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> */}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/read" element={<Read />} />

        <Route path="/read/:readId" element={<ReadDetails />} />
        <Route path="/read/:readId" element={<ReadChapter />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
