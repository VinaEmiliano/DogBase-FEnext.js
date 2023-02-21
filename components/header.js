import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import Logo from "../public/img/logo.webp"
import styles from "../styles/header.module.css"


export default function Header() {
    
    const router = useRouter()
    
    return (
        <header className={styles.header}>
            <div>
                <Link href='/'>
                    <Image src={Logo} width={100} height={100} alt='logo' className={styles.logo}/>
                </Link>
            </div>
            <nav className={styles.navigation}>
                <Link href='/' className={router.pathname === "/" ? styles.active : ''}>
                    Inicio
                </Link>
                <Link href='/razas' className={router.pathname === "/razas" ? styles.active : ''}>
                    Razas
                </Link>
                <Link href='/historia' className={router.pathname === "/historia" ? styles.active : ''}> 
                    Historia
                </Link>
                <Link href='/adiestramiento' className={router.pathname === "/adiestramiento" ? styles.active : ''}>
                    Adiestramiento canino
                </Link>
                <Link href='/carrito' className={router.pathname === "/carrito" ? styles.active : ''}>
                    <Image src={'/img/carrito.png'} width={30} height={20} alt={'imagen carrito'}/>
                </Link>
            </nav>
        </header>
    )
}
