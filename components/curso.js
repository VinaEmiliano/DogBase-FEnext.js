import Image from "next/image"
import logocurso from "../public/dogtraining.webp"
import Link from "next/link"

export default function Curso({curso}) {
    
    const {titulo, img, descripcion} = curso

    return (
        <div className="curso">
            <h1 className="titulo">{titulo}</h1>
            <Image src={logocurso} width={100} height={100} alt={`imagen ${titulo}`} className="img"/>
            <p className="parrafo">{descripcion}</p>
        </div>
    )
}
