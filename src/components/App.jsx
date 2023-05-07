import ContactsList from './Contacts/Contacts';
import { FindNumberByName } from './Find/FindNumberByName';
import { Form } from './Form/Form';

export const App = () => {
   // const getVisibleContacts = () => {
  //   const normalizedFilter = state.filter.toLowerCase();

  //   return state.contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <FindNumberByName />
      <ContactsList />
    </div>
  );
};