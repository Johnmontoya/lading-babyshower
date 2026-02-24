import { motion } from 'framer-motion'

export interface GiftItem {
    id: number
    emoji: string
    name: string
    description: string
    category: 'ropa' | 'higiene' | 'juguetes' | 'accesorios' | 'otros'
    priority?: 'alta' | 'media'
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

interface GiftCardProps {
    item: GiftItem
    index: number
}

function GiftCard({ item, index }: GiftCardProps) {
    const colors = CATEGORY_COLORS[item.category]

    return (
        <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="relative rounded-2xl p-4 flex items-start gap-3 cursor-default"
            style={{
                background: 'linear-gradient(140deg, #fdf9f4 0%, #f5ede0 100%)',
                border: '1px solid rgba(201,169,110,0.28)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.75), 0 2px 10px rgba(90,58,42,0.07)',
            }}
        >
            {/* Priority badge */}
            {item.priority === 'alta' && (
                <div
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[0.55rem]"
                    style={{ background: '#f87060', boxShadow: '0 2px 6px rgba(248,112,96,0.4)' }}
                    title="Alta prioridad"
                >
                    ⭐
                </div>
            )}

            {/* Emoji icon */}
            <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{
                    background: colors.bg,
                    border: `1.5px solid ${colors.border}`,
                    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.6)`,
                }}
            >
                {item.emoji}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <p className="font-sans font-semibold text-sm leading-tight" style={{ color: '#3a2a1a' }}>
                        {item.name}
                    </p>
                    <span
                        className="text-[0.58rem] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full"
                        style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
                    >
                        {CATEGORY_LABELS[item.category]}
                    </span>
                </div>
                <p className="font-sans font-light text-xs leading-relaxed" style={{ color: '#8a7060' }}>
                    {item.description}
                </p>
            </div>
        </motion.div>
    )
}

export default GiftCard