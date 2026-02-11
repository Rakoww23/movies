import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";
import { getMoviesById } from "../../services/movies.service";

export default function MovieDetails() {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        getMoviesById(id)
            .then((movie) => setMovie(movie))
            .finally(() => setLoading(false));
    }, [id]);

    // Función auxiliar para convertir minutos a formato H M
    const formatDuration = (totalMinutes: number) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900">
                <div className="w-16 h-16 border-4 border-slate-700 border-t-yellow-500 rounded-full animate-spin"></div>
                <p className="mt-4 text-slate-400 font-medium tracking-widest uppercase text-sm">Cargando...</p>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">404 | Película no encontrada</h2>
                    <Link to="/movies" className="text-yellow-500 mt-4 inline-block hover:underline">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 relative overflow-hidden">
            {/* Fondo con Blur (Backdrop) */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={movie.backdropImg || movie.img} 
                    className="w-full h-full object-cover opacity-20 blur-xl scale-110" 
                    alt="background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                
                {/* COLUMNA IZQUIERDA: POSTER */}
                <div className="w-full max-w-[350px] shrink-0 group">
                    <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                        <img 
                            src={movie.img} 
                            alt={movie.title} 
                            className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-yellow-500 text-slate-950 font-black px-3 py-1 rounded-lg shadow-xl">
                            ★ {movie.rating}
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA: INFO */}
                <div className="flex-1 max-w-2xl text-center lg:text-left">
                    {/* Tags y Header */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                        {Array.isArray(movie.genre) ? movie.genre.map((g) => (
                            <span key={g} className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10">
                                {g}
                            </span>
                        )) : (
                            <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold uppercase">{movie.genre}</span>
                        )}
                        <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase">
                            {movie.status || 'Released'}
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                        {movie.title}
                    </h1>

                    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-slate-400 mb-8 font-medium">
                        <span className="flex items-center gap-2">📅 {new Date(movie.releaseDate).getFullYear()}</span>
                        <span className="flex items-center gap-2">⏱ {formatDuration(movie.duration)}</span>
                        <span className="flex items-center gap-2">🌐 {movie.language || 'English'}</span>
                    </div>

                    <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 italic">
                        "{movie.description}"
                    </p>

                    {/* Ficha Técnica Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm mb-10">
                        <div>
                            <p className="text-slate-500 text-xs uppercase font-bold mb-1 tracking-widest">Director</p>
                            <p className="text-white font-medium">{movie.director || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 text-xs uppercase font-bold mb-1 tracking-widest">Presupuesto</p>
                            <p className="text-white font-medium">{movie.budget || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 text-xs uppercase font-bold mb-1 tracking-widest">Reparto</p>
                            <p className="text-white font-medium text-sm">
                                {movie.cast?.join(", ") || 'N/A'}
                            </p>
                        </div>
                    </div>

                    {/* Acciones */}
                    {/* Sección de Acciones corregida */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Usamos <a> para links externos y añadimos target="_blank" */}
        {movie.trailerUrl && (
    <a 
            href={movie.trailerUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-slate-950 rounded-2xl font-black hover:bg-yellow-400 transform transition active:scale-95 shadow-lg shadow-yellow-500/20 text-center flex items-center justify-center gap-2"
        >
            <span className="text-xl">▶</span> VER TRÁILER
        </a>
    )}

    <Link 
        to="/movies" 
        className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-colors border border-white/10 text-center"
    >
        ← Volver al Catálogo
    </Link>
</div>
                </div>

            </div>
        </div>
    );
}