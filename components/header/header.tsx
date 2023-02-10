import Link from "next/link";
import Image from "next/image";
import Logo from "/public/autoblog-logo-1.png"
import {PATH} from "@/constants/path";
import styles from "./header.module.css"

const Header = () => {
    return (
        <header>
            <div className={styles.headerContainer}>
                <div>
                    <Image src={Logo} alt="Logo" width="300" height="65"/>
                </div>
                <div className={styles.contactContainer}>
                    <Link href={PATH.HOME}>Связь с редакцией</Link>
                    <Link className="m-2" href={PATH.HOME}>info@autoblog.by</Link>
                    <input  type={"text"} className="border border-black" placeholder={'search'}/>
                </div>
            </div>
            <div className={styles.navigationContainer}>
                <nav className={styles.navigation}>
                    <Link className={styles.navigationLink} href={PATH.HOME}>Главная</Link>
                    <Link className={styles.navigationLink} href={PATH.HOME}>Автомобили</Link>
                    <Link className={styles.navigationLink} href={PATH.HOME}>Автоновости</Link>
                    <Link className={styles.navigationLink} href={PATH.HOME}>Статьи</Link>
                    <Link className={styles.navigationLink} href={PATH.HOME}>Информация</Link>
                </nav>
            </div>

        </header>
    )
}

export default Header;