import { useState } from 'react';
import { FormWrapper, Form, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const { name, number } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: '', number: '' });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          value={name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add Contact</Button>
      </Form>
    </FormWrapper>
  );
};
