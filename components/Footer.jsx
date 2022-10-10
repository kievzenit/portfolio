import NewTabLink from "./newTabLink";

import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.items}>
                <NewTabLink href="mailto:contact@kievzenit.tk">
                    <img src="/email.svg" width={20} height={20} alt="email" />
                </NewTabLink>
                <NewTabLink href="https://github.com/kievzenit">
                    <img src="/github.svg" width={20} height={20} alt="github" />
                </NewTabLink>
            </div>
            <p className={styles.copyright}>© 2022 Kirill Syttsevyi</p>
        </footer>
    )
}