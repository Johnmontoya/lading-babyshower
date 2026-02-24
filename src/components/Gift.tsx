import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GiftCard from './Gift/GiftCard'

export interface GiftItem {
    id: number
    emoji: string
    name: string
    description: string
    category: 'ropa' | 'higiene' | 'juguetes' | 'accesorios' | 'otros'
    priority?: 'alta' | 'media'
}

interface GiftListProps {
    gifts: GiftItem[]
    storeName?: string
    storeUrl?: string
}


const CATEGORY_COLORS: Record<GiftItem['category'], { bg: string; text: string; border: string }> = {
    ropa: { bg: '#fde8f0', text: '#b03060', border: '#f0a0c0' },
    higiene: { bg: '#e8f5e8', text: '#2a7a3a', border: '#90d090' },
    juguetes: { bg: '#fff3dc', text: '#8a5a00', border: '#f0c060' },
    accesorios: { bg: '#e8f0ff', text: '#2a4ab0', border: '#90b0f0' },
    otros: { bg: '#f5ece8', text: '#7a4a2a', border: '#d0a080' },
}

const CATEGORY_LABELS: Record<GiftItem['category'], string> = {
    ropa: 'Ropa',
    higiene: 'Higiene',
    juguetes: 'Juguetes',
    accesorios: 'Accesorios',
    otros: 'Otros',
}

const ALL_CATEGORIES: GiftItem['category'][] = ['ropa', 'higiene', 'juguetes', 'accesorios', 'otros']

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

const Gift: React.FC<GiftListProps> = ({ gifts, storeName, storeUrl }) => {
    const [activeFilter, setActiveFilter] = useState<GiftItem['category'] | 'todos'>('todos')

    const usedCategories = ALL_CATEGORIES?.filter(cat => gifts.some(g => g.category === cat))

    const filtered = activeFilter === 'todos'
        ? gifts
        : gifts.filter(g => g.category === activeFilter)
    return (
        <div
            className="relative flex flex-col items-center p-4 gap-6">
            <div className="relative rounded-[2rem] w-full space-y-16 max-w-sm overflow-hidden text-center"
                style={{
                    background: 'linear-gradient(155deg, #fdf8f1 0%, #f5ecdf 100%)',
                    boxShadow:
                        '0 12px 48px rgba(107,76,59,0.14), 0 2px 8px rgba(107,76,59,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                    padding: '44px 32px 52px',
                }}>


                {/* Section header */}
                <motion.div
                    className="relative rounded-[2rem] w-full max-w-sm overflow-hidden text-center"
                    style={{
                        background: 'linear-gradient(155deg, #fdf8f1 0%, #f5ecdf 100%)',
                        boxShadow:
                            '0 12px 48px rgba(107,76,59,0.14), 0 2px 8px rgba(107,76,59,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                        padding: '44px 32px 52px',
                    }}
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="flex items-center gap-3 w-full">
                        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #c9a96e)' }} />
                        <span className="text-xl">🎁</span>
                        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #c9a96e)' }} />
                    </div>

                    <span
                        className="font-sans text-[0.62rem] uppercase tracking-[0.22em] font-bold"
                        style={{ color: '#2a7a6e' }}
                    >
                        Con amor y cariño
                    </span>
                    <h2
                        className="font-serif font-bold text-2xl text-center leading-tight"
                        style={{ color: '#2a3a30' }}
                    >
                        Lista de Regalos
                    </h2>
                    <p className="font-sans font-light text-xs text-center leading-relaxed max-w-[240px]" style={{ color: '#8a7060' }}>
                        Si deseas hacernos un regalo, aquí van algunas ideas que serán de gran ayuda 🐾
                    </p>
                </motion.div>

                {/* Category filter tabs */}
                <motion.div
                    className="flex gap-2 flex-wrap justify-center w-full"
                    {...fadeUp(0.1)}
                >
                    {/* All tab */}
                    <button
                        onClick={() => setActiveFilter('todos')}
                        className="px-3 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200"
                        style={{
                            background: activeFilter === 'todos'
                                ? 'linear-gradient(135deg, #2a7a6e, #1a5a50)'
                                : 'rgba(42,122,110,0.08)',
                            color: activeFilter === 'todos' ? 'white' : '#2a7a6e',
                            border: activeFilter === 'todos' ? 'none' : '1px solid rgba(42,122,110,0.25)',
                            boxShadow: activeFilter === 'todos' ? '0 2px 8px rgba(42,90,80,0.25)' : 'none',
                        }}
                    >
                        Todos ({gifts.length})
                    </button>

                    {usedCategories.map(cat => {
                        const colors = CATEGORY_COLORS[cat]
                        const isActive = activeFilter === cat
                        const count = gifts.filter(g => g.category === cat).length
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className="px-3 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200"
                                style={{
                                    background: isActive ? colors.bg : 'rgba(240,235,228,0.8)',
                                    color: isActive ? colors.text : '#8a7060',
                                    border: isActive ? `1.5px solid ${colors.border}` : '1px solid rgba(201,169,110,0.25)',
                                    boxShadow: isActive ? `0 2px 8px ${colors.border}55` : 'none',
                                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                                }}
                            >
                                {CATEGORY_LABELS[cat]} ({count})
                            </button>
                        )
                    })}
                </motion.div>

                {/* Gift cards list */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        className="flex flex-col gap-3 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {filtered.map((item, i) => (
                            <GiftCard key={item.id} item={item} index={i} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Priority legend */}
                <motion.div
                    className="flex items-center gap-2 px-3 py-2 rounded-xl w-full"
                    style={{
                        background: 'rgba(248,112,96,0.07)',
                        border: '1px dashed rgba(248,112,96,0.3)',
                    }}
                    {...fadeUp(0.2)}
                >
                    <span className="text-sm">⭐</span>
                    <p className="font-sans text-xs" style={{ color: '#b05040' }}>
                        Los marcados con estrella son de <strong>mayor prioridad</strong>
                    </p>
                </motion.div>

                {/* Optional: tienda link */}
                {storeName && storeUrl && (
                    <motion.a
                        href={storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 px-6 rounded-full font-sans text-sm font-semibold w-full max-w-xs"
                        style={{
                            background: 'linear-gradient(120deg, #e8d0a0 0%, #f8e8b8 35%, #e8c880 55%, #f8e8b8 75%, #e8d0a0 100%)',
                            backgroundSize: '200% auto',
                            animation: 'shimmer 3s linear infinite',
                            border: '1.5px solid rgba(160,120,64,0.45)',
                            color: '#7a5020',
                            boxShadow: '0 4px 16px rgba(160,120,64,0.2), inset 0 1px 0 rgba(255,255,255,0.5)',
                        }}
                        whileTap={{ scale: 0.97 }}
                        {...fadeUp(0.25)}
                    >
                        <span>🛍️</span>
                        Ver lista en {storeName}
                    </motion.a>
                )}

                {/* Bottom paws */}
                <motion.div className="flex gap-3 opacity-20" {...fadeUp(0.3)}>
                    {['🐾', '🧸', '🐾'].map((p, i) => (
                        <span key={i} className="text-xs">{p}</span>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Gift
