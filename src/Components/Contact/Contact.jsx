import { Person, DeletedPerson } from './Contact.styled';
import propTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import { useDeletedContactMutation } from 'server/fetchContacts';
import NotContacts from 'Components/NotContacts/NotContacts';

const Contact = ({ elem }) => {
  const [ deleted, {isLoading: isDeleted} ] = useDeletedContactMutation()//после делетед мы можем принимать опции удаления если нужно. [ a, {} ]

  return (
    <>
    { isDeleted ? <NotContacts text={'Wite we deleting'} /> : <Person>
      {elem.name} : {elem.number}
      <DeletedPerson onClick={()=> deleted(elem.id)}>
        <FiX />
      </DeletedPerson>
      </Person> }
    </>
  );
};

Contact.propTypes = {
  elem: propTypes.object,
};

export default Contact;
