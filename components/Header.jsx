import Link from "next/link";

import styles from "../styles/Header.module.css"

export default function Header () {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.logo}>kievzenit</a>
            </Link>
            <nav className={styles.nav}>
                <Link href="about">
                    <a className={styles.link}>about</a>
                </Link>
                <Link href="projects">
                    <a className={styles.link}>projects</a>
                </Link>
            </nav>
        </header>
    )
}