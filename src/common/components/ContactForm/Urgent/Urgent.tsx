import WhatsappButton from "../../WhatsappButton";
import style from "./Urgent.module.css";

const urlParams = new URLSearchParams({
  text: "Buen dia Dra. Dinorah\n",
});

const Urgent = () => {
  return (
    <div className={style.content}>
      <p>Si tienes algun problema urgente </p>
      <WhatsappButton href={"https://wa.me/5551008763?" + urlParams} />
      <p>Horas de servicio: 9:00AM a 8:00PM (CT)</p>
    </div>
  );
};

export default Urgent;
