import { ListPersons } from './ContactList.styled';
import React from 'react';
import NotContacts from 'Components/NotContacts/NotContacts';
import Filter from '../Filter/Filter';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const listCont = useSelector(state => state.items);

  const findeByName = () => {
    return listCont.filter(
      elem =>
        elem.name.slice(0, filter.length).toLowerCase() === filter.toLowerCase()
    );
  };

  const nameContacts = findeByName()

  return (
    <>
      <Filter />
      {listCont.length > 0 ? (
        <ListPersons>
          {nameContacts.map(el => (
            <Contact key={el.id} elem={el} />
          ))}
        </ListPersons>
      ) : (
        <NotContacts text={'Nothing found for your request'} />
      )}
    </>
  );
};

export default ContactList;
