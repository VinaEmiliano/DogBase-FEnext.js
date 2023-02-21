import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "@/utils/helpers"


export default function Informacion({info}) {
    
    const {raza, img, historia, url, publishedAt} = info
    
    return (
        <article>
            <Image src={img.data.attributes.formats.medium.url} width={250} height={250} alt={`imagen ${raza}`}/>
            <h3>{raza}</h3>
            <p>{historia}</p>
            <p>{formatearFecha(publishedAt)}</p>
            <div>
                <Link href={`informacion/${url}`} className="btninfo">
                    Leer el post completo
                </Link>
            </div>
        </article>
    )
}
