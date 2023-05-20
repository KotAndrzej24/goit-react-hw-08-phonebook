import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const Form = () => {
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const input = e.target;
    const name = input.elements.name.value;
    const number = input.elements.number.value;
    dispatch(addContact({ name, number }));
    input.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          height: 25,
          alignItems: 'baseline',
        }}
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          color="secondary"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          id="standard-basic"
          label="Number"
          variant="standard"
          color="secondary"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            bgcolor: 'secondary.main',
            ':hover': { bgcolor: 'secondary.light' },
            fontWeight: 700,
            p: 0,
          }}
        >
          Add
        </Button>
      </Box>
    </form>
  );
};

export default Form;

Form.propTypes = {
  submit: PropTypes.func,
  change: PropTypes.func,
};
