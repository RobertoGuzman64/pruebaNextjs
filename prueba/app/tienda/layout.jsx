import Link from 'next/link'

export const metadata = {
    title: 'Tienda',
    description: 'Tienda Equipzilla',
}

export default function TiendaLayout({ children }) {
    return <>
        <nav>
            <h3>Seccion de Tienda</h3>
            <ul>
                <li>
                    <Link href='/tienda/categorias'>Categorias</Link>
                </li>
                <li>
                    <Link href='/tienda/categorias/miniexcavadora'>Miniexcavadoras</Link>
                </li>
            </ul>
        </nav>
        {children}
    </>;
}