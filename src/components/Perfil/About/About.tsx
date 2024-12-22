import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.container}>
      <h1>About</h1>
      <p>
        Olá! Meu nome é Andrew, tenho 23 anos e atualmente trabalho como Desenvolvedor Fullstack na Elin Duxus.

No meu papel como dev, utilizo Java e Spring para o desenvolvimento backend e Vue.js para algumas features. Além disso, trabalho com diversos bancos de dados, incluindo MySQL, PostgreSQL, Oracle e SQL Server. Para facilitar o desenvolvimento, uso Docker para gerenciar e configurar os bancos de dados com os quais estou trabalhando.
      </p>
      <div className={style.without}></div>
    </div>
  );
}
