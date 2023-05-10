import { useEffect } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Find from './Find/Find';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
 
  // ComponentDidUpdate

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
