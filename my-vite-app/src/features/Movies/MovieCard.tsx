import type { Movie } from "../../models/movie.model";

export default function MovieCard(props: Movie) {
    return (
        <a
            href={`/movies/${props.id}`}
            className="block max-w-sm rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-200"
        >
            {/* Imagen */}
            {props.img && (
                <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                    <img
                        src={props.img}
                        alt={props.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {props.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {props.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg font-medium">
                        {props.genre}
                    </span>

                    <span className="font-semibold text-yellow-500">
                        ⭐ {props.rating}
                    </span>
                </div>
            </div>
        </a>
    );
}
