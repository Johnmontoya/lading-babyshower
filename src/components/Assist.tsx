import config from '../data/config.json'

const Assist = () => {
    return (
        <section id="asistencia" className="py-24 px-4 bg-white relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif mb-8">¿Nos acompañás?</h2>

                <div className="max-w-xl mx-auto bg-[#E9EDC9]/30 rounded-[3rem] p-12 border-2 border-[#CCD5AE]">
                    <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                        {config.assist.message}
                    </p>

                    <a
                        href={config.assist.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#606C38] hover:bg-[#283618] text-white px-12 py-5 rounded-full text-xl font-medium transition-all transform hover:-translate-y-1 shadow-xl shadow-[#606C38]/20"
                    >
                        Confirmar Asistencia
                    </a>

                    <p className="mt-8 text-sm text-[#606C38] font-medium italic">
                        ¡Estamos ansiosos por verte!
                    </p>
                </div>
            </div>

            {/* Decorative floral motifs (simple SVG placeholders) */}
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#CCD5AE]">
                    <circle cx="50" cy="50" r="40" fill="currentColor" />
                </svg>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none rotate-180">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#CCD5AE]">
                    <circle cx="50" cy="50" r="40" fill="currentColor" />
                </svg>
            </div>
        </section>
    )
}

export default Assist
