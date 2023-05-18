import PropTypes from 'prop-types';
import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

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
        <li key={el.id} className={css.list}>
          <p className={css.render}>{el.name}</p>
          <p className={css.render}>{el.number}</p>
          <button
            name={el.name}
            id={el.id}
            className={css.btn}
            onClick={handleDelete}
          >
            Delete
          </button>
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
