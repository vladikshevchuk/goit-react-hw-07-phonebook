import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Contact } from './Contacts.styled';

const PersonContact = ({ contact }) => {
  const [deleteContact, {isLoading}] = useDeleteContactMutation();

  return (
    <Contact>
      {contact.name}: {contact.phone}
      <button onClick={() => deleteContact(contact.id)} disabled={isLoading}>
        Delete
      </button>
    </Contact>
  );
};

PersonContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default PersonContact;
