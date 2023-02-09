import style from "./App.module.css";

import ContactForm from "../common/components/ContactForm";
import PostList from "../common/components/PostList";

const App = () => {
  return (
    <div className={style.content}>
      <div className={style.title}>
        <h1>Dinorah Fonseca</h1>
        <p>Adictologa</p>
      </div>
      <div className={style.about}>
        <h2>Más sobre mi</h2>
        <p>
          Amet cupidatat cillum elit excepteur sit adipisicing. Culpa qui
          reprehenderit enim occaecat incididunt consectetur minim commodo
          consectetur eiusmod. Sunt eu sint culpa anim qui non proident qui est
          cupidatat laborum aute commodo. Excepteur dolore tempor culpa Lorem
          mollit esse proident qui irure. Culpa veniam commodo commodo ad
          occaecat excepteur enim eiusmod occaecat laborum Lorem ullamco
          consectetur.
        </p>
        <p>
          Esse fugiat culpa cupidatat dolor nulla. Culpa quis nulla eu irure
          veniam aliqua do cillum proident. Quis dolore Lorem et consectetur
          minim incididunt laboris mollit.
        </p>
        <p>
          Esse excepteur commodo quis commodo qui ex adipisicing laborum ut
          Lorem ex. Ex exercitation voluptate adipisicing cillum fugiat et irure
          in est adipisicing magna eiusmod. Eu ut ad in labore nisi ut duis
          excepteur incididunt ipsum minim pariatur. Voluptate enim id cillum
          reprehenderit consequat anim sunt est excepteur dolor. Consequat
          laborum eu consectetur pariatur reprehenderit ipsum laboris.
        </p>
      </div>
      <ContactForm />
      <PostList />
    </div>
  );
};

export default App;
