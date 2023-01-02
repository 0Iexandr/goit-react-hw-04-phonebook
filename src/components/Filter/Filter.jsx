import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onInputChange }) => {
  return (
    <div className={css.form}>
      <form>
        <div className={css.box}>
          <input
            type="text"
            onChange={e => onInputChange(e.target.value)}
          />
          <label>Find contacts by name</label>
        </div>
      </form>
    </div>
  );
};

Filter.propTypes = {
  onInputChange: PropTypes.func,
};