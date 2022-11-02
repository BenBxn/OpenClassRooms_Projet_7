import React from "react";

import "../Layouts/Layout.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children}) {
    return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
    )
}

export default Layout;