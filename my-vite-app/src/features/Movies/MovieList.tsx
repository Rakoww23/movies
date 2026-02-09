import type { Movie } from "../../models/movie.model";
import MovieCard from "./MovieCard";

export default function MovieList(){
    const movies: Movie[] = [
        {
            id: "thebatman",
            title: "The Batman",
            description: "parte1"
        },
        {
            id: "darkKnight",
            title: "The Batman2",
            description: "parte2"
        }

    ];

    return(
        <div className= "flex flex-col gap-4">
            {movies.map((movie) => (
                <MovieCard key={movie.id}{...movie} />
            ))}
        
            <p>Lista de peliculas</p>
        </div>
    );
}