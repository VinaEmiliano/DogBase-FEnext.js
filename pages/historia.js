import Link from "next/link"
import Layout from "@/components/layout"
import Informacion from "@/components/informacion"
import style from "../styles/historia.module.css"

export default function Historia({infos}) {
    return (
            <Layout
                title={'Historia'}
                description="Conoce el origen de las razas"
            >
                <main className="mainstyle">
                    <h1 className="titulo">Historia de las razas</h1>
                    <div className={style.grilla}>
                        {infos?.map(info => (
                            <Informacion
                            key={info.id}
                            info={info.attributes}
                            />
                        ))}
                    </div>
                </main>
            </Layout>
    )
}


export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/historias?populate=img`)
    const {data: infos} = await respuesta.json()
    
    return{
        props: {
            infos
        }
    }
}