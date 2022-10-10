import Head from "next/head"
import styles from "../styles/AboutMain.module.css"

export default function AboutMain() {
    return (
        <>
            <Head>
            <meta name="description" content="A little bit about me. My tech skills." />
                <title>About kievzenit | kievzenit's tech skills</title>
            </Head>
            <main className={styles.container}>
                <div className={styles["inner-container"]}>
                    <h1>Who am I?</h1>
                    <section className={styles.section}>I am Ukrainian web developer, passionate about everything related to computers. Focused on improving my profesional skills.</section>
                    <br />
                    <section className={styles.section}>
                        <p>My tech skills:</p>
                        <ul>
                            <li>C#/.NET (ASP.NET, clean architecture, CQRS)</li>
                            <li>JavaScript (React/Next)</li>
                            <li>HTML5/CSS3/vanilla js</li>
                            <li>Python (as scripting language)</li>
                            <li>Sql Server</li>
                            <li>PostgreSQL</li>
                            <li>Redis</li>
                            <li>Assembler (x86-64)</li>
                            <li>Golang (a little bit)</li>
                        </ul>
                    </section>
                </div>
            </main>
        </>
    )
}