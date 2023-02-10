import React from "react";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./layout.module.css"

type LayoutPropsType = {
    children: React.ReactNode
}

const Layout = ({children} : LayoutPropsType) => {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout