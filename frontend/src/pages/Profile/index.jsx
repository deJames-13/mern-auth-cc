import { Button, Card } from 'react-daisyui';
import { FaEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
function Profile() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Card className='container h-full max-w-xl p-8 shadow-2xl bg-base-100'>
      <div className='flex items-center justify-between'>
        <Card.Title tag='h1'>Profile Information</Card.Title>
        <Button color='primary'>
          <FaEdit />
          Edit
        </Button>
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
