import config from '../data/config.json'

const Navbar = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#FAEDCD]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-serif text-[#D4A373] tracking-tight">
                            {config.babyName}
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Inicio', 'Lugar', 'Regalos', 'Asistencia'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item === 'Inicio' ? 'hero' : item.toLowerCase())}
                                    className="text-gray-600 hover:text-[#D4A373] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
