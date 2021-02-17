import React from "react";
import AsideStyles from "./Aside.module.scss";
// import Img from "./Img";
import Image from "./Images";

const Aside = () => {
  return (
    <div className={AsideStyles.aside}>
      <h2 className={AsideStyles.title}>Welcome to my blog!</h2>
      <p className={AsideStyles.text}>
        Ciao, sono Martina, sono originaria di Ischia e vivo in Sicilia. Mi
        piacciono i libri e in questo blog parlo del cazzo che voglio
      </p>
      <h2 className={AsideStyles.title}>A little bit of me</h2>
      <div className={AsideStyles.images}>
        <Image
          src="img/grid/IMG_2323.JPG"
          alt="family"
          className={AsideStyles.img}
        />
        <Image
          src="img/grid/IMG_2324.JPG"
          alt="family4"
          className={AsideStyles.img}
        />
        <Image
          src="img/grid/IMG_2322.JPG"
          alt="family3"
          className={AsideStyles.img}
        />
        <Image
          src="img/grid/IMG_2325.JPG"
          alt="family2"
          className={AsideStyles.img}
        />
        <Image
          src="img/grid/IMG_2321.JPG"
          alt="snooky"
          className={AsideStyles.img}
        />
        <Image
          src="img/grid/IMG_2320.JPG"
          alt="ciro"
          className={AsideStyles.img}
        />
      </div>
      <div className={AsideStyles.socials}>
        <h2 className={AsideStyles.title}>Follow me!</h2>
        <ul>
          <li>
            <a href="#" className={AsideStyles.facebook}>
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="#" className={AsideStyles.instagram}>
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
