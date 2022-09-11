import React from "react";
import Image, { StaticImageData } from "next/image";
import audiophileLogo from "components/IntroSectionWithDropDownNav/starterCode/images/client-audiophile.svg";
import databizLogo from "components/IntroSectionWithDropDownNav/starterCode/images/client-databiz.svg";
import makerLogo from "components/IntroSectionWithDropDownNav/starterCode/images/client-maker.svg";
import meetLogo from "components/IntroSectionWithDropDownNav/starterCode/images/client-meet.svg";
import styles from "styles/pages/IntroSectionWithDropdownNav/IntroSectionWithDropdownNav.module.scss";

const ClientLogos = () => {
  return (
    <div className={styles.clientLogos}>
      {clients.map((client) => (
        <div key={client.name} className={styles.clientLogo}>
          <Image
            src={client.logo.src}
            alt={`${client.name} Logo`}
            height={client.logo.height}
            width={client.logo.width}
            blurDataURL={client.logo.blurDataURL}
          />
        </div>
      ))}
    </div>
  );
};

interface Client {
  name: string;
  logo: StaticImageData;
}

const clients: Client[] = [
  {
    name: "Databiz",
    logo: databizLogo,
  },
  {
    name: "Audiophile",
    logo: audiophileLogo,
  },
  {
    name: "Meet",
    logo: meetLogo,
  },
  {
    name: "Maker",
    logo: makerLogo,
  },
];

export default ClientLogos;
