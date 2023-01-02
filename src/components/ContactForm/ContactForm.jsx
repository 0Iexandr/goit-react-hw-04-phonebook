import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ onFormSubmit }) => {
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(userData);
    e.target.reset();
  };

  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit}>
        <div className={css.box}>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Name</label>
        </div>
        <div className={css.box}>
          <input
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <label>Number</label>
        </div>
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add contact
        </button>
      </form>
    </div>
  );
}
ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};