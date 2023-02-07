import style from "./Urgent.module.css";

const Urgent = () => {
  return (
    <div className={style.content}>
      <p>
        Si tienes algun problema urgente <br />
        Envia un mensaje de texto a{" "}
        <a href="https://wa.me/5551008763">+52 55 5100 8763 </a>
        <br />
        Horas de servicio: 9:00AM a 8:00PM (CT)
      </p>
    </div>
  );
};

export default Urgent;
