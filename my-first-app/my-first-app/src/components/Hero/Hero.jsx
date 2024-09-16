import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  const imageUrl = getImageUrl(
    "assets/nav/hero/24325541_2022_ani_cartoon_27-removebg-preview 1.png"
  );
  console.log(imageUrl); // Check this URL in the browser or console

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi Welcome, I’m Yorian</h1>
        <p className={styles.description}>
          I am a Front-end developer student from the Netherlands. In my
          previous career i worked as a chef and i showcased my creativity in
          cooking. Now I study web development, and I’m eager to learn the world
          of IT.
        </p>
        <a href="mailto:sydney-cook@outlook.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <img src={getImageUrl} alt="hero" className={styles.heroImage} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
};
