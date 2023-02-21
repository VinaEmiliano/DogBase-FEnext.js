import { useState, useEffect } from 'react'
import '@/styles/globals.css'



export default function App({ Component, pageProps }) {
  
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  
  const [carrito, setCarrito] =useState(carritoLS)
  
  const [paginaLista, setPaginaLista] = useState(false)
  useEffect(() => {
    setPaginaLista(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  
  const agregarCarrito = raza => {
    // Comprobar si la raza ya esta en el carrito...
    if(carrito.some( razaState =>  razaState.id === raza.id )) {
        // Iterar para actualizar la cantidad
        const carritoActualizado = carrito.map( razaState => {
            if( razaState.id === raza.id ) {
              razaState.cantidad = raza.cantidad;
            } 
            return razaState;
        });
        // Se asigna al array
        setCarrito([...carritoActualizado]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    } else {
        // En caso de que la raza no exista, es nuevo y se agrega
        setCarrito([...carrito, raza]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    }
  }
  
  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
  } 
  
  const actualizarCantidad = raza => {
    const carritoActualizado = carrito.map( razaState => {
      if(razaState.id === raza.id ) {
        razaState.cantidad = parseInt( raza.cantidad )
      } 
      return razaState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
  }
  
  return paginaLista ? <Component {...pageProps}  
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}
  /> : null
}
