import PropTypes from 'prop-types';
import css from './find.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';

const Find = () => {
  const dispatch = useDispatch();

  const filterHandler = e => {
    const input = e.target.value;
    dispatch(setStatusFilter(input));
  };

  return (
    <>
      <p className={css.filter}>Find Person</p>
      <input
        onChange={filterHandler}
        type="text"
        name="filter"
        placeholder="Search"
      />
    </>
  );
};

export default Find;

Find.propTypes = {
  showFilterInput: PropTypes.func,
};
