import { useEffect } from 'react';
import { Form } from './Form/Form';
import Title from './Title/Title';
import { BoxApp } from './App.styled';
import ContactList from './ContactList/ContactList';
import NotContacts from './NotContacts/NotContacts';
import { useSelector, useDispatch } from 'react-redux';
import { apdateInitialContacts } from 'redux/sliceContacts';

export const App = () => {
  const listContacts = useSelector(state => state.items) //это функция получения значения из всего редакс состояния в котором можно обратится к различным свойствам (редьюсерам)
  const dispatch = useDispatch()

  useEffect(() => {
    const lCont = localStorage.getItem('contacts');
    if (lCont) {
      dispatch(apdateInitialContacts(JSON.parse(lCont)))
    }
  }, [dispatch])
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(listContacts));
  },[listContacts])

  return (
    <BoxApp>
      <Title text={'Phonebook'} />
        <Form />
      <Title text={'Contacts'} />

      {listContacts.length < 1 ? (
        <NotContacts text={'The contact list is currently empty'} />
        ) : (
          <ContactList />
        )
      }
    </BoxApp>
  );
};
