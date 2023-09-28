import styles from './layout.module.css'
import Link from "next/link";

import utilStyles from '../utils/utils.module.css';
import Head from "next/head";

export default function Layout({ children, home }){
    return <div className={styles.container}>
        <Head>
            <link rel="icon" href="/schichtenundgeschichten.png" />
        </Head>
        <header className={styles.header}>
            <Link href={"/"} className={styles.websiteTitle}><i>Schichten & Geschichten</i></Link>
            2023
        </header>
        <main className={styles.main}>
            {children}
        </main>
        <footer>
            {!home && (
                <div>
                    <Link href={"/"} className={utilStyles.link}>← Zurück zur Übersicht</Link>
                </div>
            )}
        </footer>
    </div>
}