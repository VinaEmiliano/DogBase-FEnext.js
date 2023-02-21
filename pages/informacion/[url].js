import Layout from "@/components/layout"
import Image from "next/image"
import { formatearFecha } from "@/utils/helpers"

export default function Post({history}) {
    
    const {raza, historia, img, publishedAt} = history[0].attributes
    

    return (
        <Layout
        title={'Historia'}
        >
            <div className="cardhistoria">
                <Image src={img.data.attributes.url} width={100} height={100} alt={`imagen raza ${raza}`}/>
                
                <div>
                    <h3>{raza}</h3>
                    <p>{formatearFecha(publishedAt)}</p>
                    <p>{historia}</p>
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticPaths () {
    const respuesta = await fetch(`${process.env.API_URL}/historias`)
    const {data} = await respuesta.json()
    
    const paths = data.map( history => ({
        params: {
            url: history.attributes.url
        }
    }))
    
    return {
        paths,
        fallback: false,
    }
    
}

export async function getStaticProps ( {params: {url} } ) {

    const respuesta = await fetch(`${process.env.API_URL}/historias?filters[url]=${url}&populate=*`)
    const {data: history} = await respuesta.json()
    
    return {
        props: {
            history
        }
    }
    
    
}