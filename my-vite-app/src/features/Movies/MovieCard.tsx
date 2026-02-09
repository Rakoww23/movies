import type { Movie } from "../../models/movie.model";

export default function MovieCard(props: Movie){
    return(
        <a href={`/movies/${props.id}`} className="movie-card">

        <div>
            <p>Titulo: {props.title}</p>
            <p>Descripcion: {props.description}</p>
        </div>
        </a>
    );
}