import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Heroes from "../pages/Heroes/Heroes";
import Read from "../pages/Read/Read.jsx";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/read" element={<Read />} />

        {/* <Route path="/read/:readId" element={<ReadDetails />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
