import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  const filtered = contacts.filter(el =>
    el.name.toLowerCase().includes(filter)
  );

  return (
    <List
      sx={{
        width: 250,
        display: 'inline-block',
        textAlign: 'left',
      }}
    >
      {filtered.map(el => (
        <ListItem key={el.id}>
          <ListItemText primary={el.name} secondary={el.number} />
          <Button
            variant="contained"
            size="small"
            name={el.name}
            id={el.id}
            onClick={handleDelete}
            sx={{
              bgcolor: 'secondary.main',
              ':hover': {
                bgcolor: 'secondary.light',
              },
            }}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  filtered: PropTypes.array,
  deletes: PropTypes.func,
};
