import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Shows } from "./pages/Shows/Shows";
import { Favorites } from "./pages/Favorites/Favorites";
import { Footer } from "./components/Footer/Footer";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { ShowDetails } from "./components/ShowDetails/ShowDetails";
import { FavoritesProvider } from "./hooks/useFavorites";

function App() {
  return (
    <>
      <FavoritesProvider>
        <Router>
          <div className="lg:pb-[4rem]">
            <Header />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/shows/:id" element={<ShowDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </>
  );
}

export default App;
