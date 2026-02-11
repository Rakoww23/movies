export default function Header() {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* Logo / Título */}
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    🎬 Movies
                </h1>

                {/* Navegación */}
                <nav className="flex items-center gap-6 text-sm md:text-base">
                    <a
                        href="/"
                        className="hover:text-blue-400 transition duration-200"
                    >
                        Home
                    </a>

                    <a
                        href="/movies"
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition duration-300"
                    >
                        Movies
                    </a>
                </nav>

            </div>
        </header>
    );
}
