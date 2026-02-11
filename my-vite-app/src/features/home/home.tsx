export function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
                
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                    🚀 Bienvenido a MovieCach
                </h1>

                <p className="text-gray-300 text-lg mb-8">
                    Entra para ver las mejores peliculas de la actualidad
                </p>

                <a
                    href="/movies"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300 hover:scale-105"
                >
                    🎬 Ver peliculas
                </a>

            </div>
        </div>
    );
}
