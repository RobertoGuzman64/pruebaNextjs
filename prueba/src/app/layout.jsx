import Navbar from "@/components/navbar";
import { Roboto } from "next/font/google";
import "./globals.css"

export const metadata = {
    title: 'Equipzilla',
    description: 'Página oficial de Equipzilla',
    icon: 'https://equipzilla.com/favicons/equipzilla/favicon-16x16.png'
}

const roboto = Roboto({
    weight:["300","400","500","700"],
    styles:["italic","normal"],
    subsets:["latin"]
})

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link rel="icon" type="image/png" sizes="16x16" href={metadata.icon} />
            </head>
            <body className={roboto.className}>
                <Navbar></Navbar>
                {children}
            </body>
        </html>
    )
}