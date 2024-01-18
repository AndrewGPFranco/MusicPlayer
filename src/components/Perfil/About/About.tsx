import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.container}>
      <h1>About</h1>
      <p>
        Olá! Sou o Andrew, tenho 22 anos e sou um desenvolvedor versátil com um
        apreço pelo frontend e o coração no backend! Minhas habilidades no
        Front-End abrangem HTML, CSS, JavaScript, React Js, Next.js, Vue, Bootstrap e
        Tailwind enquanto no Back-End, meus domínios são em PHP, Java, Laravel e
        Spring.
      </p>
      <div className={style.without}></div>
    </div>
  );
}
