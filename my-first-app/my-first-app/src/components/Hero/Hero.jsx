import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  const imageUrl = getImageUrl(
    "24325541_2022_ani_cartoon_27-removebg-preview-1.png"
  );
  console.log(imageUrl); // This should print: /hero/24325541_2022_ani_cartoon_27-removebg-preview-1.png

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi Welcome, I’m Yorian</h1>
        <p className={styles.description}>
          I am a Front-end developer student from the Netherlands. In my
          previous career, I worked as a chef and showcased my creativity in
          cooking. Now I study web development, and I’m eager to learn the world
          of IT.
        </p>
        <a href="mailto:sydney-cook@outlook.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <img
          src={imageUrl}
          alt="Cartoon of Yorian the developer"
          className={styles.heroImage}
          loading="lazy"
        />
        <div className={styles.topBlur} aria-hidden="true" />
        <div className={styles.bottomBlur} aria-hidden="true" />
      </div>
    </section>
  );
};
