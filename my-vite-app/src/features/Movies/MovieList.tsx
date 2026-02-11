import type { Movie } from "../../models/movie.model";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }: { movies: Movie[] }) {
    return (
        <div className="w-full">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
                🎥 Mostrando {movies.length} películas
            </p>
        </div>
    );
}