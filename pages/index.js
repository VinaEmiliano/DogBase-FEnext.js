import Layout from "@/components/layout"
import Raza from "@/components/raza"
import Informacion from "@/components/informacion"
import Curso from "@/components/curso"
import Link from "next/link"
import styleraza from "../styles/razas.module.css"
import stylehistoria from "../styles/historia.module.css"

export default function Home({razas, historias, curso}) {
  return (
      <Layout
        title={'Inicio'}
        description= "Toda la informacion sobre tu mascota perruna, en un solo lugar"
      >
        <main className="mainstyle">
          <h2 className="titulo">Seccion de razas</h2>
          <div className={styleraza.grilla}>
            {razas.map(raza => (
                <Raza
                    key={raza.id}
                    raza={raza.attributes}
                />
            ))}
          </div>
          <div>
            <Curso 
              curso={curso.attributes}
            />
            <div className="divbtncurso">
            <Link href="/adiestramiento" className="btninfo">
                Mas informacion
            </Link>
            </div>
          </div>
          <div>
            <h2 className="titulo">Historia de las razas</h2>
            <div className={stylehistoria.grilla}>
              {historias?.map(info => (
                  <Informacion
                  key={info.id}
                  info={info.attributes}
                  />
              ))}
            </div>
          </div>
        </main>
      </Layout>
  )
}

export async function getStaticProps () {
  const urlRazas = `${process.env.API_URL}/razas?populate=*`
  const urlHistorias = `${process.env.API_URL}/historias?populate=*`
  const urlCurso = `${process.env.API_URL}/curso?populate=*`

  const [resRazas, resHistorias, resCurso] = await Promise.all([
    fetch(urlRazas),
    fetch(urlHistorias),
    fetch(urlCurso)
  ])
  
  const [{data: razas}, {data: historias}, {data: curso}] = await Promise.all([
    resRazas.json(),
    resHistorias.json(),
    resCurso.json()
  ])
  
  return {
    props: {
      razas,
      historias,
      curso
    }
  }
  
}