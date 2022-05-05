import { Person, DeletedPerson } from './Contact.styled';
import propTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import { useDeletedContactMutation } from 'server/fetchContacts';

const Contact = ({ elem }) => {
  const [ deleted ] = useDeletedContactMutation()

  return (
    <Person>
      {elem.name}: {elem.number}
      <DeletedPerson onClick={()=> deleted(elem.id)}>
        <FiX />
      </DeletedPerson>
    </Person>
  );
};

Contact.propTypes = {
  elem: propTypes.object,
};

export default Contact;
