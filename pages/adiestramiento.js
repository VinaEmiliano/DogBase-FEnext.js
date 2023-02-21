import Curso from "@/components/curso"
import Layout from "@/components/layout"

export default function Adiestramiento({curso}) {
    return (
        <>
        <Layout
            title={'Adiestramiento'}
            description= "Cursos de adiestramiento canino"
        >
        <main className="mainstyle">
            <div className="estiloCurso">
            <Curso 
                curso={curso.attributes}
            />
            </div>
        </main>
        </Layout>
        </>
    )
}

export async function getStaticProps () {
    const respuesta = await fetch(`${process.env.API_URL}/curso?populate=*`)
    const {data: curso} = await respuesta.json()
    
    
    return {
        props: {
            curso
        }
    }
}