import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  const imageUrl = getImageUrl(
    "nav/24325541_2022_ani_cartoon_27-removebg-preview 1.png"
  );
  console.log(imageUrl); // Check this URL in the browser or console

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi Welcome, I’m Yorian</h1>
        <p className={styles.description}>
          I am a Frontend developer student, and this is my portfolio. In my
          previous career, I worked as a chef and showcased my creativity in
          cooking. Now I’m studying web development, and I’m eager to learn the
          world of IT. This is the showcase of my work.
        </p>
        <a href="mailto:sydney-cook@outlook.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <img src={imageUrl} alt="hero" className={styles.heroImage} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
};
