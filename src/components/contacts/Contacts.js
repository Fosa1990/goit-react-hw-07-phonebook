import styled from 'styled-components';
import Button from '../button';
import Spinner from '../spinner/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import {
  filteredContacts,
  isLoading,
} from '../../redux/contacts/selectors/contactsSelectors';
import { deleteContact } from '../../redux/contacts/operations/contactsOperations';
// import { deleteContact } from '../../redux/contacts-vanila/contact-operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);
  const loading = useSelector(isLoading);
  return (
    <>
      {loading && <Spinner />}
      <ul>
        {contacts.map(person => (
          <ListItem key={person.id}>
            {person.name} : {person.phone}
            <Button
              content="Delete"
              handleClick={() => dispatch(deleteContact(person.id))}
            />
          </ListItem>
        ))}
      </ul>
    </>
  );
}
export const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  list-style: circle;
  align-items: baseline;
  width: 350px;
  padding: 5px;
  font-family: var(--font);
  font-size: 18px;
  line-height: 1.5;
  ::before {
    content: '';
    display: block;
    height: 7px;
    width: 7px;
    background-color: var(--yellow);
    border-radius: 50%;
  }
  button {
    margin: 5px 0 5px 10px;
    padding: 3px 10px 3px 10px;
    :hover {
      background-color: var(--blue);
      border: 1px solid var(--dark);
    }
  }
`;
