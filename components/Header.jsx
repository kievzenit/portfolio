import Link from "next/link"
import cn from "classnames"

import styles from "../styles/Header.module.css"

export default function Header({activeLink}) {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={
                        activeLink === "home" ? 
                            `${styles.logo} ${styles.active}` : `${styles.logo}`}>kievzenit</a>
            </Link>
            <nav className={styles.nav}>
                <Link href="about">
                    <a className={
                        activeLink === "about" ? 
                            `${styles.link} ${styles.active}` : `${styles.link}`}>
                        about
                    </a>
                </Link>
                <Link href="projects">
                    <a className={
                        activeLink === "projects" ? 
                            `${styles.link} ${styles.active}` : `${styles.link}`}>
                            projects
                    </a>
                </Link>
            </nav>
        </header>
    )
}