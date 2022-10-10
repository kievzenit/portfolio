import Head from "next/head";
import Link from "next/link";

import styles from "../styles/HomeMain.module.css"

export default function HomeMain() {
    return (
        <>
            <Head>
                <meta name="description" content="I'm kievzenit and this is my personal portfolio website." />
                <title>kievzenit | c# developer</title>
                <meta name="google-site-verification" content="2o3XM0qJyB9QVLS8vWv2HU_wgyaTT0JtgZnX7lde8b8" />
            </Head>
            <main className={styles.main}>
                <h2 className={styles.hello}>
                    <img src="/hello.svg" width={90} height={90} alt="hello" />
                    <p>Hello, there!</p>
                </h2>
                <div className={styles.container}>
                    <s>General Kenobi!</s>
                    <h4 className={styles.name}>I&apos;m Kirill Syttsevyi</h4>
                    <h5 className={styles.about}>c# backend developer</h5>
                    <Link href="about">
                        <button className={styles.more}>More about me</button>
                    </Link>
                </div>
            </main>
        </>
    )
}