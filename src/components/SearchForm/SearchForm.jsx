import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onInputChange = e => setValue(e.target.value);

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(value);
    resetForm();
  };

  const resetForm = () => setValue('');

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          onChange={onInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// SearchForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
