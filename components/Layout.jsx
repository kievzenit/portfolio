import Header from "./Header"

export default function Layout({activeLink, children}) {
    return (
        <>
        <Header activeLink={activeLink}/>
        {children}
        </>
    )
}