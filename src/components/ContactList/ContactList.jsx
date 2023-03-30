import PropTypes from 'prop-types';

export const ContactsList = ({ contactList, deleteContact }) => {
  return (
    <table>
      <tbody>
        {contactList.map(contact => {
          return (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ContactsList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      contact: PropTypes.object,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
