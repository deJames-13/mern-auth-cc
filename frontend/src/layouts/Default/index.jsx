import { Outlet } from 'react-router-dom';
import { Header } from '../../partials';
import FooterWrapper from './../../partials/Footer/index';

function DefaultLayout() {
  return (
    <div id='default-layout'>
      <Header />
      <div className='container mx-auto min-h-screen grid place-items-center'>
        <Outlet />
      </div>
      <FooterWrapper />
    </div>
  );
}

export default DefaultLayout;
