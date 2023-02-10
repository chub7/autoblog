import Link from "next/link";
import Image from "next/image";
import Logo from "/public/autoblog-logo-1.png"
import {PATH} from "@/constants/path";
import styles from "./header.module.css"

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <Image src={Logo} alt="Logo" className={styles.logo}/>
                </div>
                <div>
                    <Link href={PATH.HOME}>Связь с редакцией</Link>
                    <Link href={PATH.HOME}>info@autoblog.by</Link>
                    <input type={"text"}/>
                </div>
            </div>
            <nav>
                <Link href={PATH.HOME}>Home</Link>
            </nav>
        </header>
    )
}

export default Header;