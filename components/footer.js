import Link from "next/link"
import styles from "../styles/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.navigation}>
                <Link href='/'>
                    Inicio
                </Link>
                <Link href='/razas'>
                    Razas
                </Link>
                <Link href='/historia'> 
                    Historia
                </Link>
                <Link href='/adiestramiento'>
                    Adiestramiento canino
                </Link>
            </nav>
            <p>
                Para obtener mas infomacion comuniquese a TheDogsBase@correo.com
            </p>
        </footer>
    )
}
