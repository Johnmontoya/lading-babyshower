import { motion } from 'framer-motion'
import BotanicalCorner from './Counter/BotanicalCorner'
import flores from '../assets/flores2.svg'

interface LocationSectionProps {
    venue: string
    address: string
    city: string
    mapsUrl: string
    mapsEmbedUrl: string
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

const Location = ({
    venue,
    address,
    city,
    mapsUrl,
    mapsEmbedUrl,
}: LocationSectionProps) => {
    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center justify-center p-4"
            >
                <div className="relative rounded-[2rem] w-full space-y-16 max-w-sm overflow-hidden text-center"
                    style={{
                        background: 'linear-gradient(155deg, #fdf8f1 0%, #f5ecdf 100%)',
                        boxShadow:
                            '0 12px 48px rgba(107,76,59,0.14), 0 2px 8px rgba(107,76,59,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                        padding: '44px 32px 52px',
                    }}>

                    <BotanicalCorner position="tl" />
                    <BotanicalCorner position="tr" />

                    {/* Section header */}
                    <motion.div className="flex flex-col items-center gap-2 w-full" {...fadeUp(0)}>
                        {/* Decorative top divider */}
                        <div className="flex items-center gap-3 w-full">
                            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #2a7a6e)' }} />
                            <span className="text-xl">📍</span>
                            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #2a7a6e)' }} />
                        </div>

                        <span
                            className="font-sans text-[0.62rem] uppercase tracking-[0.22em] font-bold"
                            style={{ color: '#2a7a6e' }}
                        >
                            ¿Dónde nos encontramos?
                        </span>
                        <h2
                            className="font-serif font-bold text-2xl text-center leading-tight"
                            style={{ color: '#2a3a30' }}
                        >
                            Ubicación
                        </h2>
                    </motion.div>

                    {/* Map embed */}
                    <motion.div
                        className="w-full rounded-2xl overflow-hidden relative"
                        style={{
                            boxShadow: '0 6px 24px rgba(42,90,60,0.15), 0 0 0 3px rgba(42,122,110,0.12)',
                            height: 200,
                        }}
                        {...fadeUp(0.1)}
                    >
                        {/* Map iframe */}
                        <iframe
                            src={mapsEmbedUrl}
                            width="100%"
                            height="200"
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación del evento"
                        />

                        {/* Overlay gradient bottom */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
                            style={{ background: 'linear-gradient(to top, rgba(240,238,232,0.4), transparent)' }}
                        />
                    </motion.div>

                    {/* Venue info card */}
                    <motion.div
                        className="w-full rounded-2xl p-4 flex flex-col gap-2"
                        style={{
                            background: 'linear-gradient(140deg, #f8f5ee 0%, #f0ebe0 100%)',
                            border: '1px solid rgba(201,169,110,0.3)',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7), 0 2px 12px rgba(90,58,42,0.07)',
                        }}
                        {...fadeUp(0.18)}
                    >
                        {/* Venue name */}
                        <div className="flex items-start gap-3">
                            <div
                                className="mt-0.5 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ background: 'rgba(42,122,110,0.12)' }}
                            >
                                <span className="text-sm">🏡</span>
                            </div>
                            <div>
                                <p className="font-sans font-semibold text-sm" style={{ color: '#2a3a30' }}>
                                    {venue}
                                </p>
                                <p className="font-sans font-light text-xs mt-0.5 leading-relaxed" style={{ color: '#7a6a58' }}>
                                    {address}
                                </p>
                                <p className="font-sans font-light text-xs" style={{ color: '#7a6a58' }}>
                                    {city}
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px mx-2" style={{ background: 'rgba(201,169,110,0.25)' }} />

                        {/* Open maps button */}
                        <motion.a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-sans text-sm font-semibold w-full"
                            style={{
                                background: 'linear-gradient(135deg, #7a572aff 0%, #5a311aff 100%)',
                                color: 'white',
                                boxShadow: '0 3px 12px rgba(42,90,80,0.25)',
                            }}
                            whileTap={{ scale: 0.97 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.15 }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <polygon points="3,11 22,2 13,21 11,13 3,11" />
                            </svg>
                            Cómo llegar
                        </motion.a>
                    </motion.div>

                    {/* Paw trail bottom decoration */}
                    <motion.div className="flex gap-2 opacity-20" {...fadeUp(0.28)}>
                        {['🐾', '🐾', '🐾'].map((p, i) => (
                            <span key={i} className="text-xs">{p}</span>
                        ))}
                    </motion.div>


                    <BotanicalCorner position="br" />
                </div>
            </div>
            <div className="relative w-full h-full">
                <img src={flores} alt="Background" className="z-30 absolute -top-60 left-0 rotate-180 w-64 h-64 object-cover" />
            </div>
        </>
    )
}

export default Location