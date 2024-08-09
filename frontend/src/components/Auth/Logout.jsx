import { PropTypes } from 'prop-types';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials, usersApi } from './../../slices';

function LogoutButton({ ...buttonProps }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = usersApi.useLogoutMutation();
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      dispatch(setCredentials(null));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleLogout}>
      <button type='submit' className='btn btn-primary' {...buttonProps}>
        <FaArrowRightFromBracket />
        Log Out
      </button>
    </form>
  );
}
LogoutButton.propTypes = {
  buttonProps: PropTypes.object,
};

export default LogoutButton;
