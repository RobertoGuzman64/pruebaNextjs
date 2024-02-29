import Link from 'next/link'

export default function TiendaLayout({ children }) {
    return <>
        <nav>
            <h3>Seccion de Tienda</h3>
            <ul>
                <li>
                    <Link href='/tienda/categorias'>Categorias</Link>
                </li>
                <li>
                    <Link href='categorias/miniexcavadora'>Miniexcavadoras</Link>
                </li>

            </ul>
        </nav>
        {children}
    </>;
}