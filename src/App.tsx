import { motion } from 'framer-motion'
import type { GiftItem } from './components/Gift'
import Gift from './components/Gift'
import Time from './components/Counter'
import Hero from './components/Hero'
import Location from './components/Location'
import Footer from './components/Footer'

const LOCATION = {
  venue: 'Salón Los Sueños',
  address: 'Av. Siempreviva 742, Piso 2',
  city: 'Buenos Aires, Argentina',
  mapsUrl: 'https://maps.google.com/?q=Av.+Siempreviva+742+Buenos+Aires',
  // Para el embed: Google Maps → tu lugar → Compartir → Insertar un mapa → copia el src del iframe
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016873882573!2d-58.38375882346191!3d-34.603844157082165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf83db7e5d%3A0xf7d37c2f1a83e4b0!2sObelisco!5e0!3m2!1ses!2sar!4v1700000000000',
}

const GIFTS: GiftItem[] = [
  // Ropa
  {
    id: 1,
    emoji: '👶',
    name: 'Bodies talle 0-3 meses',
    description: 'Idealmente de algodón, colores neutros o pasteles suaves.',
    category: 'ropa',
    priority: 'alta',
  },
  {
    id: 2,
    emoji: '🧦',
    name: 'Medias y escarpines',
    description: 'Talle recién nacido. Nunca sobran!',
    category: 'ropa',
  },
  {
    id: 3,
    emoji: '🧤',
    name: 'Manoplas y gorrito de algodón',
    description: 'Para los primeros días, talle 0-1 mes.',
    category: 'ropa',
    priority: 'alta',
  },
  {
    id: 4,
    emoji: '🌙',
    name: 'Pijamas enterizos',
    description: 'Con cierre o botones, talles 0-3 y 3-6 meses.',
    category: 'ropa',
  },

  // Higiene
  {
    id: 5,
    emoji: '🧴',
    name: 'Crema para pañal',
    description: 'Marca Bepanthen o similar, para proteger la piel.',
    category: 'higiene',
    priority: 'alta',
  },
  {
    id: 6,
    emoji: '🛁',
    name: 'Esponja de baño suave',
    description: 'Para bebés recién nacidos, textura muy suave.',
    category: 'higiene',
  },
  {
    id: 7,
    emoji: '🌿',
    name: 'Jabón y shampoo de bebé',
    description: "Sin perfume ni sulfatos. Ideal línea Johnson's Bedtime.",
    category: 'higiene',
  },
  {
    id: 8,
    emoji: '🧻',
    name: 'Toallitas húmedas',
    description: 'Sin alcohol, fragancia ni parabenos. Pack x 3 o más.',
    category: 'higiene',
    priority: 'alta',
  },

  // Juguetes
  {
    id: 9,
    emoji: '🐻',
    name: 'Peluche suave pequeño',
    description: 'Sin piezas sueltas ni ojos de plástico. Lavable.',
    category: 'juguetes',
  },
  {
    id: 10,
    emoji: '🎵',
    name: 'Móvil musical para cuna',
    description: 'Con luces suaves y melodías relajantes.',
    category: 'juguetes',
    priority: 'alta',
  },
  {
    id: 11,
    emoji: '🦀',
    name: 'Sonajeros de tela',
    description: 'De agarre fácil, colores contrastantes para estimulación visual.',
    category: 'juguetes',
  },

  // Accesorios
  {
    id: 12,
    emoji: '🍼',
    name: 'Biberones anticólico',
    description: "Avent o Dr. Brown's, talla S para recién nacidos.",
    category: 'accesorios',
    priority: 'alta',
  },
  {
    id: 13,
    emoji: '🎒',
    name: 'Pañalera de paseo',
    description: 'Con compartimentos internos, que sea impermeable.',
    category: 'accesorios',
  },
  {
    id: 14,
    emoji: '🌡️',
    name: 'Termómetro digital',
    description: 'De axila o frente, de lectura rápida.',
    category: 'accesorios',
  },
  {
    id: 15,
    emoji: '🛏️',
    name: 'Sábanas de cuna ajustables',
    description: 'Pack x 2, algodón 100%, sin estampados con tintes fuertes.',
    category: 'accesorios',
    priority: 'alta',
  },

  // Otros
  {
    id: 16,
    emoji: '💛',
    name: 'Tarjeta de regalo',
    description: 'Si preferís que elijamos nosotros, también es bienvenida.',
    category: 'otros',
  },
]

export default function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(160deg, #f0ece4 0%, #e8dfd4 100%)' }}>
      <motion.div
        className="relative w-full max-w-md overflow-hidden rounded-[2.2rem]"
        style={{ boxShadow: '0 20px 60px rgba(90,58,42,0.16), 0 4px 12px rgba(90,58,42,0.08)' }}
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        {/* ─── SECCIÓN 2: Counter ─── */}
        <Time />
        {/* ─── SECCIÓN 3: Ubicación ─── */}
        <Location {...LOCATION} />
        {/* ─── SECCIÓN 4: Lista de regalos ─── */}
        <Gift
          gifts={GIFTS}
        />
        {/* ─── SECCIÓN 5: Footer ─── */}
        <Footer names={'Loco y Tatiana'} />

      </motion.div>
    </div>
  )
}