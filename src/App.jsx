import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Shows } from "./pages/Shows/Shows";
import { Favorites } from "./pages/Favorites/Favorites";
import { Auth } from "./pages/Auth/Auth";
import { Popular } from "./pages/Movies/Popular/Popular";
import { TopRated } from "./pages/Movies/Top Rated/TopRated";
import { Upcoming } from "./pages/Movies/Upcoming/Upcoming";

function App() {
  return (
    <>
      <Router>
        <div className="pb-10">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/top-rated" element={<TopRated />} />
          <Route path="/movies/upcoming" element={<Upcoming />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/favorites" element={<Favorites />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
