import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header/header";

type LayoutPropsType = {
    children: React.ReactNode
}

const Layout = ({children} : LayoutPropsType) => {
    return (
        <div className="w-4/5 m-auto">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout