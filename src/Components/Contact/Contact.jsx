import { Person, DeletedPerson } from './Contact.styled';
import propTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import { deletedContact } from 'redux/sliceContacts';
import { useDispatch } from 'react-redux';

const Contact = ({ elem }) => {
  const dispatch = useDispatch()

  return (
    <Person>
      {elem.name}: {elem.numberTel}
      <DeletedPerson onClick={() => dispatch(deletedContact(elem.id))}>
        <FiX />
      </DeletedPerson>
    </Person>
  );
};

Contact.propTypes = {
  elem: propTypes.object,
};

export default Contact;
