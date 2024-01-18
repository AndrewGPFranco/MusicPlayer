import style from './Contact.module.css';

export default function Contact() {
  return (
    <div className={style.container}>
      <button className={style.btnMessage}>
        Message
      </button>
      <button className={style.btnFollow}>
        Follow me
      </button>
    </div>
  );
}
