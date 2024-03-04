"use client"
import { useRouter } from "next/navigation"

export default function AboutPage() {
    const router = useRouter()
    return <section>
        <h1>Sobre Nosotros</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis optio natus neque et voluptates obcaecati accusantium maiores porro quidem qui, nobis dolorum dolor, a, quae ex iure eos saepe harum.</p>
        <button className="bg-sky-400 px-3 py-2 rounded-md"
            onClick={() => {
                alert('Puedes ejecutar código antes de redirigir')
                router.push('/')
            }}>
            Click
        </button>
    </section>
}