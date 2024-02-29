import Navbar from "@/components/navbar"

export const metadata = {
    title: 'Equipzilla',
    description: 'Página oficial de Equipzilla',
    icon: 'https://equipzilla.com/favicons/equipzilla/favicon-16x16.png'
}

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link rel="icon" type="image/png" sizes="16x16" href={metadata.icon} />
            </head>
            <body>
                <Navbar></Navbar>
                {children}
            </body>
        </html>
    )
}