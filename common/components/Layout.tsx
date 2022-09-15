import Head from "next/head";
import Image from "next/image";
import styles from "styles/pages/Home.module.scss";
import React from "react";
import Navbar from "common/components/Navbar";
import Footer from "common/components/Footer";
interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
