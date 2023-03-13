import { createContext } from "react";
import { UseLocalStorage } from "../hooks/UseLocalStorage";

const ContactsContext = createContext();

export function useContacts() {
  return useContacts(ContactsContext);
}

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = UseLocalStorage("contacts", []);

  function createContact(id, name) {
    setContacts((preContacts) => {
      return [...preContacts, { id, name }];
    });
  }

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
