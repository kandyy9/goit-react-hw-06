import ContactForm from "../ContactForm/ContactForm";
import Searchbox from "../SeacrhBox/SeacrhBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <h1>Phone</h1>
      <ContactForm />
      <Searchbox></Searchbox>
      <ContactList></ContactList>
    </div>
  );
}
