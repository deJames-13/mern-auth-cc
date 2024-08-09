import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../../partials';
import FooterWrapper from './../../partials/Footer/index';

function DefaultLayout() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) navigate('/');
  }, [navigate, userInfo]);
  return (
    <div id='default-layout'>
      <Header />
      <div className='container grid min-h-screen mx-auto place-items-center'>
        <Outlet />
      </div>
      <FooterWrapper />
    </div>
  );
}

export default DefaultLayout;
