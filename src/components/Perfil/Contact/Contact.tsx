import style from './Contact.module.css';

export default function Contact() {
  return (
    <div className={style.container}>
      <button className={style.btnMessage}>
        <a href="https://api.whatsapp.com/send?phone=5511978862185&text=Olá, vim pelo seu projeto music player." target="_blank">Message</a>
      </button>
      <button className={style.btnFollow}>
        <a href="https://www.instagram.com/andrew_gpereira/" target="_blank">Follow me</a>
      </button>
    </div>
  );
}
