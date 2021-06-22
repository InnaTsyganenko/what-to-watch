import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.any.isRequired,
  user: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.any.isRequired,
}).isRequired;
