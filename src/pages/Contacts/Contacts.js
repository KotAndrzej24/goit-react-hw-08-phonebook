import Form from 'components/Form/Form';
import Find from 'components/Find/Find';
import ContactList from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

export function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
