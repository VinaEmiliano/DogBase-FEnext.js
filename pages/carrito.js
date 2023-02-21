import { useState, useEffect } from "react"
import Layout from "@/components/layout"
import Image from "next/image"
import style from "../styles/carrito.module.css"

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {
    
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        const calcularTotal = carrito.reduce( (total, mascota) => total + mascota.cantidad, 0 )
        setTotal(calcularTotal)
    }, [carrito])
    
    return (
        <Layout
            title={'Carrito'}
            description="Finaliza el proceso de adopcion"   
        >
            <main className="mainstyle">
                <h1 className="titulo">Proceso de adopcion</h1>
                <div className={style.grid}>
                    <div>
                        <h3>Mascotas</h3>
                        {carrito.length === 0 ? 'Elige una mascota' : (
                            carrito.map( mascota => (
                                <div
                                    key={mascota.id}
                                    className={style.cardmascota}
                                >
                                    <div>
                                        <Image src={mascota.imagen} width={200} height={200} alt={mascota.nombre}/>
                                    </div>
                                    <div>
                                        <p>{mascota.nombre}</p>
                                        <select 
                                            onChange={e => actualizarCantidad({
                                                id:mascota.id,
                                                cantidad: e.target.value
                                            })}
                                            value={mascota.cantidad}
                                        >
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                        </select>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={ () => eliminarProducto(mascota.id)}
                                    >
                                        Quitar
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                    <aside className={style.aside}>
                        <h3>Resumen</h3>
                        <p>Total a adoptar: {total} mascotas</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}
