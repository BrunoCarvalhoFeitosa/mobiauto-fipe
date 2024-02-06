import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mobiauto",
    description: "Sistema de busca de automóveis utilizando api tabela FIPE.",
    icons: {
        icon: "/images/favicon.ico",
        shortcut: "/images/favicon.ico"
    },
    authors: {
        name: "Bruno Carvalho Feitosa",
        url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
    }
}

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={inter.className}>
                <div className="flex w-full min-h-[100dvh]">
                    {children}
                </div>
            </body>
        </html>
    );
}