import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/layout"
import imgerror from "../public/Pagina404.webp"

export default function Pagina404() {
    return (
        <Layout>
            <h1 className="titulo">Pagina no encontrada</h1>
            <div className="errorPage">
                
                <Link href="/" className="btninfo">
                    Volver a Inicio
                </Link>
            </div>
        </Layout>
    )
}
