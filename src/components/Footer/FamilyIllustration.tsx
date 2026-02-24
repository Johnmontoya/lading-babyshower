import { useRef } from "react";
import src from "../../assets/footer/footer.mp4"
import poster from "../../assets/hero/poster.png"

export default function FamilyIllustration() {
    const videoRef = useRef(null);
    return (
        <video
            ref={videoRef}
            src={src}
            poster={poster} // Imagen de pre-carga opcional
            autoPlay
            loop
            muted
            playsInline
            controls={false} // Asegura que no se vean los controles
            style={{
                zIndex: 1,
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Clave para que actúe como 'background-size: cover'
            }}
        />
    )
}