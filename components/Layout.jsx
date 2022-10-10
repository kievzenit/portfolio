import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ activeLink, children }) {
    return (
        <>
            <Head>
                <meta name="google-site-verification" content="2o3XM0qJyB9QVLS8vWv2HU_wgyaTT0JtgZnX7lde8b8" />
                <meta charSet="utf-8" />
                <meta name="robots" content="all" />
            </Head>
            <Header activeLink={activeLink} />
            {children}
            <Footer />
        </>
    )
}