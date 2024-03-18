import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Shows } from "./pages/Shows/Shows";
import { Favorites } from "./pages/Favorites/Favorites";
import { Auth } from "./pages/Auth/Auth";
import { Footer } from "./components/Footer/Footer";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { ShowDetails } from "./components/ShowDetails/ShowDetails";





function App() {
  return (
    <>
      <Router>
        <div className="lg:pb-[4rem]">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/:id" element={<ShowDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          
        </Routes>
        <div className="">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
