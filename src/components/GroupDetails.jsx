import PropTypes from 'prop-types';

function GroupDetails({name , description , group_type }) {
  return (
<div className="group-details bg-white rounded-lg shadow-md p-6 m-4">
  <h2 className="text-2xl font-bold text-blue-700 mb-4">{name}</h2>
  <p className="text-lg text-gray-700 mb-2">{description}</p>
  <p className="text-md text-gray-600 mb-4">Type: {group_type}</p>
  <h3 className="text-xl font-semibold text-blue-600">Admin</h3>
</div>
  )
}

GroupDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // members: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     user: PropTypes.shape({
  //       username: PropTypes.string.isRequired,
  //     }).isRequired,
  //     status: PropTypes.string.isRequired,
  //   })
  // ).isRequired,
  group_type: PropTypes.string,
 
};

export default GroupDetails