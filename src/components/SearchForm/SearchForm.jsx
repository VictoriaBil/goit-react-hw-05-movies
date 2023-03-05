import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Input, Btn } from '../SearchForm/SearchForm.styled';

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
    <Container>
      <Form onSubmit={onSubmitForm}>
        <Input
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          onChange={onInputChange}
        />
        <Btn type="submit">Search</Btn>
      </Form>
    </Container>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
