import { Component } from 'react';
import css from './Searchbar.module.css';
import { useState } from 'react';

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
// export class Searchbar extends Component {
//   state = {
//     inputValue: '',
//   };

//   handleChangeValue = ({ target }) => {
//     this.setState({ inputValue: target.value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.inputValue);
//     this.setState({ inputValue: '' });
//   };
//   render() {
//     return (
//       <header className={css.Searchbar}>
//         <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="css" className={css.SearchForm_button}>
//             <span className={css.button_label}>Search</span>
//           </button>

//           <input
//             className={CSS.SearchForm_input}
//             type="text"
//             autoComplete="off"
//             value={this.state.value}
//             onChange={this.handleChangeValue}
//             autoFocus
//             placeholder="Search images and photos"
//             name="searcher"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// cb={this.handleSumbit}
