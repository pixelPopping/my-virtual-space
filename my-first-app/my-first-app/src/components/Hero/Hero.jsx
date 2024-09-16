import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hi Welcome, I’m Yorian</h1>
        <p>
          I am a Frontend developer student, and this is my portfolio. In my
          previous career, I worked as a chef and showcased my creativity in
          cooking. Now I’m studying web development, and I’m eager to learn the
          world of IT. This is the showcase of my work.
        </p>
        <a href="mailto:sydney-cook@outlook.com">Contact Me</a>
      </div>
      <img src={getImageUrl("assets/Hero/DSCN0550.JPG")} alt="hero" />
    </section>
  );
};
