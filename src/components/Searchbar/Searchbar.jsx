import css from './Searchbar.module.css';
import { useState } from 'react';
import propTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChangeValue = ({ target }) => {
    setInputValue(target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="css" className={css.SearchForm_button}>
          <span className={css.button_label}>Search</span>
        </button>

        <input
          className={CSS.SearchForm_input}
          type="text"
          autoComplete="off"
          value={inputValue}
          onChange={handleChangeValue}
          autoFocus
          placeholder="Search images and photos"
          name="searcher"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
