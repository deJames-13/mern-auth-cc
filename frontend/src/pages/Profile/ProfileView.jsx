import PropTypes from 'prop-types';
import { Badge } from 'react-daisyui';
import { FaUserCircle } from 'react-icons/fa';
import { MdEdit, MdMail, MdTimer } from 'react-icons/md';
import { useOutletContext } from 'react-router-dom';
function ProfileView() {
  const { userInfo } = useOutletContext();
  return (
    <>
      <Badge color='info'>
        ID: <span className='px-2 font-bold text-opacity-80 text-base-100'>{userInfo.id} </span>
      </Badge>
      <h1 className='flex items-center gap-2 mt-4 text-4xl font-extrabold'>
        <FaUserCircle />
        {userInfo.name}
      </h1>
      <div className='divider'></div>
      <h2 className='flex items-center gap-2'>
        <MdMail />
        <strong>Email:</strong>
        {userInfo.email}
      </h2>
      <h2 className='flex items-center gap-2'>
        <MdTimer />
        <strong>Created At:</strong>
        {userInfo.createdAt}
      </h2>
      <h2 className='flex items-center gap-2'>
        <MdEdit />
        <strong>Updated At:</strong>
        {userInfo.updatedAt}
      </h2>
    </>
  );
}
ProfileView.propTypes = {
  user: PropTypes.object,
};
export default ProfileView;
