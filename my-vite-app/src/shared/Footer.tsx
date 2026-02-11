export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-10">
            <div className="max-w-6xl mx-auto px-6 py-8">
                
                {/* Contenido principal */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    
                    <h2 className="text-xl font-bold text-white">
                        🎬 Movies App
                    </h2>

                    <nav className="flex gap-6 text-sm">
                        <a
                            href="/"
                            className="hover:text-blue-400 transition duration-200"
                        >
                            Home
                        </a>
                        <a
                            href="/movies"
                            className="hover:text-blue-400 transition duration-200"
                        >
                            Movies
                        </a>
                    </nav>
                </div>

                {/* Línea divisoria */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Derechos de autor */}
                <p className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Movies App. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
