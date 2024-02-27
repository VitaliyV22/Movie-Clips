import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Shows } from "./pages/Shows/Shows";
import { People } from "./pages/People/People";
import { Favorites } from "./pages/Favorites/Favorites";

function App() {
  

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/people" element={<People />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
