import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/layout"
import imgerror from "../public/Pagina404.webp"

export default function Pagina404() {
    return (
        <Layout>
            <h1 className="titulo">Pagina no encontrada</h1>
            <div className="errorPage">
                <Image src={imgerror} width={250} height={250} alt={'pagina no encontrada'}/>
                <Link href="/" className="btninfo">
                    Volver a Inicio
                </Link>
            </div>
        </Layout>
    )
}
