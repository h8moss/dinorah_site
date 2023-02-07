import { motion } from "framer-motion";
import whatsappIcon from "./whatsapp_icon.png";
import style from "./WhatsappButton.module.css";

interface Props {
  href: string;
}

const WhatsappButton = ({ href }: Props) => {
  return (
    <motion.a
      href={href}
      className={style.button}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      target="_blank"
    >
      <img src={whatsappIcon} alt="Whatsapp logo" />
      Enviame un mensaje
    </motion.a>
  );
};

export default WhatsappButton;
