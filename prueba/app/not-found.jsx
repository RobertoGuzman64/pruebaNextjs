import Link from 'next/link'

export const metadata = {
    title: 'Error',
    description: 'Error Equipzilla',
}

export default function NotFound() {
    return <section>
        <nav>
            <h1>Error 404</h1>
            <p>Página no encontrada</p>
            <ul>
                <li>
                    <Link href='/'>Volver</Link>
                </li>
            </ul>
        </nav>
    </section>;
}