import { Li, ButtonList, Number } from './ContactList.styled';
export const ContactItem = ({ contact, onDelete }) => (
  <Li>
    {contact.name}: <Number>{contact.number}</Number>
    <ButtonList onClick={() => onDelete(contact.id)}>Delete</ButtonList>
  </Li>
);
