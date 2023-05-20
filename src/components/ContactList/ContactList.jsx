import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import { Button } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

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
    <ul>
      {filtered.map(el => (
        <li key={el.id}>
          <p>{el.name}</p>
          <p>{el.number}</p>
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
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filtered: PropTypes.array,
  deletes: PropTypes.func,
};
