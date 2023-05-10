import PropTypes from 'prop-types';
import css from './form.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../../redux/operations';

export const Form = () => {
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const input = e.target;
    const name = input.elements.name.value;
    const phone = input.elements.number.value;
    dispatch(addContact({ name, phone }));
    input.reset();
  };

  return (
    <form onSubmit={submitHandler} className={css.form}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Number"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  submit: PropTypes.func,
  change: PropTypes.func,
};
