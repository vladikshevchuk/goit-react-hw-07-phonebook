import React from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { Ul } from './Contacts.styled';
import PersonContact from './PersonContact';

const ContactsList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const state = useSelector(state => state.filter);


  const getVisibleContacts = () => {
    const normalizedFilter = state.filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {error && 
       <p>ой, что-то пошло не так :( перезагрузите страницу</p>} 
    <Ul>
    {isLoading ? (<b>загрузк...</b>) : getVisibleContacts().map(contact => {
      return <PersonContact key={contact.id} contact={ contact } />
    })}
  </Ul>
    </>
  )
};

export default ContactsList;
