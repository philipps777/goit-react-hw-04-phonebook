import { Input } from 'components/ContactForm/ContactForm.styled';
export const Filter = ({ value, onChange }) => (
  <Input
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder="Search by name"
  />
);
