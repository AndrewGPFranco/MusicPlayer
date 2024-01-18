import style from './Title.module.css';

function Title({ title }) {
  return (
    <div className={style.title}>
      <h1>{title}</h1>
    </div>
  );
}

export default Title;