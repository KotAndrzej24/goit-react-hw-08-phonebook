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
    <div>
      <h1>Phonebook</h1>
      <Form />
      <Find />
      <ContactList />
    </div>
  );
}
