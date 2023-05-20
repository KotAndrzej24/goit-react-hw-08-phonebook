import Form from 'components/Form/Form';
import Find from 'components/Find/Find';
import ContactList from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import { Typography } from '@mui/material';

export function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h3">Phonebook</Typography>
      <Form />
      <Find />
      <ContactList />
    </Box>
  );
}
