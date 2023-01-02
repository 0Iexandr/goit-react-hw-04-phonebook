import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button
            className={css.btn}
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};