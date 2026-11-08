import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found | Black Cardinal",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
      />
      <section className={styles.page} aria-label="Page not found">
        <div className={`${styles.glow} ${styles.glowA}`} aria-hidden="true" />
        <div className={`${styles.glow} ${styles.glowB}`} aria-hidden="true" />
        <div className={styles.wrap}>
          <div className={styles.brand}>
            BLACK <span>CARDINAL</span>
          </div>
          <section className={styles.card}>
            <div className={styles.top}>
              <span className={styles.badge}>ERROR 404</span>
              <h1>This page took a wrong turn</h1>
              <p>
                We couldn&apos;t find what you were looking for. Try one of these
                instead.
              </p>
            </div>
            <nav className={styles.links} aria-label="Helpful links">
              <Link href="/services">
                Our services <i aria-hidden="true">&rarr;</i>
              </Link>
              <Link href="/about">
                About us <i aria-hidden="true">&rarr;</i>
              </Link>
              <Link href="/contact">
                Contact <i aria-hidden="true">&rarr;</i>
              </Link>
            </nav>
          </section>
          <Link className={styles.button} href="/">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
