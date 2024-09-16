import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  // Generate the correct image URL
  const imageUrl = getImageUrl(
    "hero/24325541_2022_ani_cartoon_27-removebg-preview 1.png"
  );

  console.log(imageUrl); // This should log the correct path to the image

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
        {/* Use the imageUrl value in the img src */}
        <img src={imageUrl} alt="hero" className={styles.heroImage} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
};
