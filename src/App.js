import Section from './components/section';
import Container from './components/container';
import Title from './components/title';
import Form from './components/form';
import Filter from './components/filter';
import Contacts from './components/contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/operations/contactsOperations';
// import { fetchContacts } from './redux/contacts-vanila/contact-operations';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <>
      <Form />
      <Section>
        <Container>
          <Title title="Contacts" />
          <Filter />
          <Contacts />
        </Container>
      </Section>
    </>
  );
}

/*
 how to switch between thunk/vanilla:
 re comment imports in the files:
 src/App.js
 src/components/Contacts.js
 src/components/Form.js
 src/components/Filter.js
src/redux/store.js
 */
