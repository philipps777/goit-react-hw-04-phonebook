import { List } from './ContactList.styled';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </List>
);
