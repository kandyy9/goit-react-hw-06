import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const query = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id ? contact.id : nanoid()}
            contact={contact}
          ></Contact>
        ))}
      </ul>
    </>
  );
}
