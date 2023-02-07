import style from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={style.content}>
      <p>Recive notificaciones en tu correo cuando suba nuevos posts</p>
      <input placeholder="email" className={style.emailInput} />
      <button className={style.emailSubmit}>Subscribeme!</button>
    </div>
  );
};

export default Subscribe;
