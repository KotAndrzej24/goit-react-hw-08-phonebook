import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import Typography from '@mui/material/Typography';

const Find = () => {
  const dispatch = useDispatch();

  const filterHandler = e => {
    const input = e.target.value;
    dispatch(setStatusFilter(input));
  };

  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h4" sx={{ my: 2 }}>
        Find Person
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={filterHandler}
        type="text"
        name="filter"
        color="secondary"
      />
    </Box>
  );
};

export default Find;

Find.propTypes = {
  showFilterInput: PropTypes.func,
};
