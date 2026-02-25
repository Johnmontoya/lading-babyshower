import { motion } from 'framer-motion'
import type { GiftItem } from './components/Gift'
import Gift from './components/Gift'
import Time from './components/Counter'
import Hero from './components/Hero'
import Location from './components/Location'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const LOCATION = {
  venue: 'La Rancheria',
  address: 'Vía Principal Piendamo',
  city: 'Piendamó, Cauca',
  mapsUrl: 'https://www.google.com/maps/place/La+Rancheria+Complejo+Turistico+Piendamo/@2.6384801,-76.5342658,17z/data=!3m1!4b1!4m6!3m5!1s0x8e300be952cfe91d:0xdb5e89f22c4d50cf!8m2!3d2.638475!4d-76.5317008!16s%2Fg%2F11s655178k?entry=ttu',
  // Para el embed: Google Maps → tu lugar → Compartir → Insertar un mapa → copia el src del iframe
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.5886283597342!2d-76.53426582429016!3d2.6384800560780093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300be952cfe91d%3A0xdb5e89f22c4d50cf!2sLa%20Rancheria%20Complejo%20Turistico%20Piendamo!5e0!3m2!1ses-419!2sco!4v1772030675457!5m2!1ses-419!2sco',
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

  // Juguetes y Motor
  {
    id: 10,
    emoji: '🎵',
    name: 'Móvil musical para cuna',
    description: 'Con luces suaves y melodías relajantes.',
    category: 'juguetes',
    priority: 'alta',
  },
  {
    id: 17,
    emoji: '🏎️',
    name: 'Ferrari',
    description: 'Para que el bebé empiece con estilo. Rojo obligatorio.',
    category: 'otros',
    priority: 'alta',
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
    id: 15,
    emoji: '🛏️',
    name: 'Sábanas de cuna ajustables',
    description: 'Pack x 2, algodón 100%, sin estampados con tintes fuertes.',
    category: 'accesorios',
    priority: 'alta',
  },

  // Para los Padres (Post-parto)
  {
    id: 18,
    emoji: '🍾',
    name: 'Caja de Alcohol',
    description: 'Para brindar cuando el bebé por fin se duerma.',
    category: 'otros',
  },
  {
    id: 19,
    emoji: '🍻',
    name: 'Pack de Cervezas Poker',
    description: 'Indispensables para sobrevivir a las desveladas.',
    category: 'otros',
  },
  {
    id: 16,
    emoji: '💛',
    name: 'Tarjeta de regalo',
    description: 'Si preferís que elijamos nosotros, también es bienvenida.',
    category: 'otros',
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'linear-gradient(160deg, #f0ece4 0%, #e8dfd4 100%)' }}>
        <DotLottieReact
          src={'https://res.cloudinary.com/dnx4de9yv/raw/upload/v1772032975/baby_loading.lottie'}
          loop
          autoplay
          style={{ width: '200px', height: '200px' }}
        />
        <h2 className='text-center text-xl text-indigo-600 animate-bounce'>Shhh... esta soñando con su llegada.</h2>
      </div>
    );
  }

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