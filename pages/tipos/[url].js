import { useState } from "react"
import {useRouter} from 'next/router'
import Image from "next/image"
import Layout from "@/components/layout"

export default function Tipos({raza, agregarCarrito}) {
    const router = useRouter()
    
    const [cantidad, setCantidad] = useState(0)
    
    
    const {nombre, razaimg, razadescripcion} = raza[0].attributes
    
    const handleSubmit = e => {
        e.preventDefault()
        
        if(cantidad < 1) {
            alert('ingresa un valor valido')
            return
        }
        
        const razaSeleccionada = {
            id: raza[0].id,
            imagen: razaimg.data.attributes.url,
            nombre,
            cantidad,
        }
        agregarCarrito(razaSeleccionada)
        router.push('/carrito')
    }
    
    
    return (
        <Layout
        title={'Adopcion'}
        >
            <div className="cardraza">
                <Image src={razaimg.data.attributes.url} width={100} height={100} alt={`imagen raza ${nombre}`}/>
                
                <div>
                    <h3>{nombre}</h3>
                    <p>{razadescripcion}</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="cantidad">Cantidad</label>
                    <select 
                        onChange={ e => setCantidad(Number(e.target.value))}
                        id='cantidad'
                    >
                        <option value='0'>Selecciona una valor</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                    </select>
                    <input 
                        type="submit"
                        value="Adoptar"
                    />
                </form>
            </div>
        </Layout>
    )
}

/* export async function getServerSideProps ( {query: {url} } ) {
    
    const respuesta = await fetch(`${process.env.API_URL}/razas?filters[razaurl]=${url}&populate=*`)
    const {data: raza} = await respuesta.json()
    
    return {
        props: {
            raza
        }
    }
} */

export async function getStaticPaths () {
    const respuesta = await fetch(`${process.env.API_URL}/razas`)
    const {data} = await respuesta.json()
    
    const paths = data.map(raza => ({
        params: {
            url: raza.attributes.razaurl
        }
    }))
    
    
    return{
        paths,
        fallback: false,
    }   
}   

export async function getStaticProps ( {params: {url} } ) {
    
    const respuesta = await fetch(`${process.env.API_URL}/razas?filters[razaurl]=${url}&populate=*`)
    const {data: raza} = await respuesta.json()
    
    return {
        props: {
            raza
        }
    }
}

