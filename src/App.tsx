import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Home } from './features/home/home';
import NotFound from './shared/NotFound';
import Movies from './features/Movies/Movies';
import MovieDetails from './features/Movies/MovieDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-grow px-4 py-8 max-w-6xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
