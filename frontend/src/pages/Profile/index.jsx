import { useState } from 'react';
import { Button, Card } from 'react-daisyui';
import { FaArrowLeft, FaEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
function Profile() {
  const { userInfo } = useSelector((state) => state.auth);
  const [isEdit, setIsEdit] = useState(window.location.pathname === '/profile/edit');

  return (
    <Card className='container h-full max-w-xl p-8 shadow-2xl bg-base-100'>
      <div className='flex items-center justify-between'>
        <Card.Title tag='h1'>Profile Information</Card.Title>
        {!isEdit ? (
          <Link to='/profile/edit'>
            <Button color='primary' onClick={() => setIsEdit(!isEdit)}>
              <FaEdit />
              Edit
            </Button>
          </Link>
        ) : (
          <Link to='/profile'>
            <Button color='info' onClick={() => setIsEdit(!isEdit)}>
              <FaArrowLeft />
              Go Back
            </Button>
          </Link>
        )}
      </div>
      <div className='divider'></div>
      <Card.Body>
        <Outlet context={{ userInfo }} />
      </Card.Body>
      <div className='divider'></div>
    </Card>
  );
}

export default Profile;
export { default as ProfileEdit } from './ProfileEdit';
export { default as ProfileView } from './ProfileView';
