import styles from "./notFound.module.scss";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className={`${styles.bsod} ${styles.container}`}>
            <h1 className={`${styles.neg} ${styles.title}`}>
                <span className={styles.bg}>Error - 404</span>
            </h1>

            <p>An error has occurred, to continue:</p>
            <p>* Return to our homepage.</p>
            <nav className={styles.nav}>
                <Link href="/" className={styles.link}>
                    Home
                </Link>
            </nav>
        </main>
    );
}
