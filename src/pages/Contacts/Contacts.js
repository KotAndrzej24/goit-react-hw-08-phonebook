import Form from 'components/Form/Form';
import Find from 'components/Find/Find';
import ContactList from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

export function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h3">Phonebook</Typography>
      <Form />
      <Find />
      <ContactList />
    </Box>
  );
}
