import React from "react";
import Image from "next/image";
import styles from "styles/pages/Home.module.scss";
import mandalaImg from "public/images/mandala.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/perennialautodidact"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.logo}>
          <Image
            src={mandalaImg}
            alt="Mandala"
            title="Keegan Good"
            width={72}
            height={72}
          />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
