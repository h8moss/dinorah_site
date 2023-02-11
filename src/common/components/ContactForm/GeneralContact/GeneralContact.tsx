import style from "./GeneralContact.module.css";

const GeneralContact = () => {
  return (
    <div className={style.formBody}>
      <input placeholder="nombre" />
      <input placeholder="email" />
      <input placeholder="cuestion" />
      <button>Enviar</button>
    </div>
  );
};

export default GeneralContact;
