import Image from "next/image";
import Link from "next/link";

import styles from "../styles/HomeMain.module.css"

export default function HomeMain() {
    return (
        <main className={styles.main}>
            <h2 className={styles.hello}>
                <Image src="/hello.svg" width={90} height={90} />
                <p>Hello, there!</p>
            </h2>
            <div className={styles.container}>
                <h6><s>General Kenobi!</s></h6>
                <h4 className={styles.name}>I'm Kirill Syttsevyi</h4>
                <h5 className={styles.about}>c# backend developer</h5>
                <Link href="about">
                    <button className={styles.more}>More about me</button>
                </Link>
            </div>
        </main>
    )
}