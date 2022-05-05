
import { Form } from './Form/Form';
import Title from './Title/Title';
import { BoxApp } from './App.styled';
import ContactList from './ContactList/ContactList';
import NotContacts from './NotContacts/NotContacts';

import { useGetAllContactsQuery } from 'server/fetchContacts';


export const App = () => {

  const { data: listContacts, error, isLoading } = useGetAllContactsQuery() //мы можем присваивать данные в переменные пример listContacts, но можно и пользоваться голой датой как переменной

  return (
    <BoxApp>
      <Title text={'Phonebook'} />
      <Form />

      <Title text={'Contacts'} />
      {error ? <NotContacts text={`Data contacts ${error.data}`} /> : isLoading ? (
        <NotContacts text={'Wite loading now...'} />
        ) : (
          <ContactList contacts={ listContacts }/>
        )
      }
    </BoxApp>
  );
};
