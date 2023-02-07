import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import style from "./ContactForm.module.css";
import Urgent from "./Urgent";
import GeneralContact from "./GeneralContact";
import Subscribe from "./Subscribe";

const ContactForm = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sections = useMemo(
    () => [<Urgent />, <GeneralContact />, <Subscribe />],

    []
  );

  return (
    <div>
      <h2>Contactame</h2>
      <div className={style.buttons}>
        <motion.div
          className={style.selectionMarker}
          animate={{
            left: `${35 * selectedIndex - 2}%`,
          }}
        />

        <motion.button
          onClick={() => setSelectedIndex(0)}
          animate={{
            color: selectedIndex === 0 ? "#fff" : "#000",
          }}
        >
          Urgencias
        </motion.button>
        <motion.button
          onClick={() => setSelectedIndex(1)}
          animate={{
            color: selectedIndex === 1 ? "#fff" : "#000",
          }}
        >
          Contacto general
        </motion.button>
        <motion.button
          onClick={() => setSelectedIndex(2)}
          animate={{
            color: selectedIndex === 2 ? "#fff" : "#000",
          }}
        >
          Recive notificaciones
        </motion.button>
      </div>
      <div className={style.content}>{sections[selectedIndex]}</div>
    </div>
  );
};

export default ContactForm;
