import Link from 'next/link'

export const metadata = {
    title: 'Sobre Nosotros',
    description: 'Sobre nosotros Equipzilla',
};

export default function TiendaLayout({ children }) {
    return <>
        <nav>
            <h3>Seccion de About</h3>
            <ul>
                <li>
                    <Link href='/tienda/categorias/miniexcavadora'>Miniexcavadoras</Link>
                </li>
            </ul>
        </nav>
        {children}
    </>;
}