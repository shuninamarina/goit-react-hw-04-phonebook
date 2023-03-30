import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <ContactListContainer>
      <h1>{title}</h1>
      {children}
    </ContactListContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
