import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { FooterWrapper, Header } from '../../partials';

function PrivateLayout() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!userInfo?.id) navigate('/login');
  }, [navigate, userInfo]);
  return (
    <div id='private-layout'>
      <Header />
      <div className='container grid min-h-screen mx-auto my-12 place-items-center'>
        <Outlet />
      </div>
      <FooterWrapper />
    </div>
  );
}

export default PrivateLayout;
