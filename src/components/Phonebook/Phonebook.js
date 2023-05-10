import Form from './Form';
import ContactList from './ContactList';
import Find from './Find';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

export function Phonebook() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <h1>Phonebook</h1>
      <Form />
      <Find />
      <h2
        style={{
          margin: 15,
        }}
      >
        Contacts
      </h2>
      <ContactList />
    </div>
  );
}
