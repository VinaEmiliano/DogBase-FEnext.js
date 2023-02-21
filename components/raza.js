import Image from "next/image"
import Link from "next/link"

export default function Raza({raza}) {

    const {nombre, razaimg, razadescripcion, razaurl} = raza

    return (
        <div>
            <Image src={razaimg.data.attributes.formats.medium.url} width={100} height={100} alt={`imagen raza ${nombre}`}/>
            <h3>{nombre}</h3>
            <p>{razadescripcion}</p>
            <div>
                <Link href={`/tipos/${razaurl}`} className="btninfo">
                ADOPTAR
                </Link>
            </div>
        </div>
    )
}
