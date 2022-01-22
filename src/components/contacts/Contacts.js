import styled from 'styled-components';
import Button from '../button';
import Spinner from '../spinner/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import {
  filteredContacts,
  isLoading,
} from '../../redux/contacts/selectors/contactsSelectors';
import { deleteContact } from '../../redux/contacts/operations/contactsOperations';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);
  const loading = useSelector(isLoading);
  return (
    <>
      {loading && <Spinner />}
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Phone</Th>
            <Th>Action</Th>
          </Tr>
        </thead>

        <tbody>
          {contacts.map(person => (
            <Tr key={person.id}>
              <Td>{person.name}</Td>
              <Td>{person.phone}</Td>
              <Td>
                <Button
                  content="Delete"
                  handleClick={() => dispatch(deleteContact(person.id))}
                />
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

const Table = styled.table`
  margin-top: 25px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 2px 2px 1px 0px #7c7c7c;
`;
const Tr = styled.tr`
  background-color: rgb(231, 231, 231);
  :nth-of-type(2n + 1) {
    background-color: var(--white);
  }
`;
const Th = styled.th`
  height: 50px;
  text-transform: uppercase;
  color: var(--yellow);
  background-color: var(--dark-purple);
`;
const Td = styled.td`
  padding: 7px 10px 7px 10px;
  text-align: center;
  color: lightslategray;
  outline: 0.1px solid rgb(243, 237, 237);

  Button {
    margin: 0;
    padding: 2px 0;
    width: 100%;
    height: auto;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
    :hover {
      background-color: var(--light-purple);
    }
  }
`;
