import { FilterPerson } from './Filter.styled';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { newFilter } from 'redux/sliceFilter';

const Filter = () => {
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  
  // метод просто обновляет состояние при вводе текста
  const onSaveFinde = event => {
    dispatch(newFilter(event.currentTarget.value.trim().toLowerCase()))
  };

  return (
    <FilterPerson type="text" name="filter" value={filter} onChange={onSaveFinde} />
  );
};
Filter.propTypes = {
  filter: propTypes.string,
  onFinde: propTypes.func,
};
export default Filter;
