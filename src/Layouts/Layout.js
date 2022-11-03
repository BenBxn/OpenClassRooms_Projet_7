import React from "react";

import "../Layouts/Layout.css";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

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