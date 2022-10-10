import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ activeLink, children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="all" />
            </Head>
            <Header activeLink={activeLink} />
            {children}
            <Footer />
        </>
    )
}