import Layout from "@/components/layout"
import Raza from "@/components/raza"
import style from "../styles/razas.module.css"

export default function Razas({razas}) {
    
    
    
    return (
            <Layout
                title={'Razas'}
                description="Conoce las distintas razas de perros"
            >
            <main className="mainstyle">
                <h1 className="titulo">Seccion de razas</h1>
                <div className={style.grilla}>
                    {razas.map(raza => (
                        <Raza
                            key={raza.id}
                            raza={raza.attributes}
                        />
                    ))}
                </div>
            </main>
            </Layout>
    )
}

export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/razas?populate=*`)
    const {data: razas} = await respuesta.json()


    
    return{
        props: {
            razas
        }
    }
}

/* export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/razas?populate=*`)
    const {data: razas} = await respuesta.json()


    
    return{
        props: {
            razas
        }
    }
} */