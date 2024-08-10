import { useState } from 'react';
import { Button, Navbar } from 'react-daisyui';
import { FaUserAlt } from 'react-icons/fa';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { LogoutButton, ThemeToggler } from './../../components';

function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname !== '/signup');

  return (
    <>
      <Navbar>
        <Navbar.Start>
          <Link to='/'>
            <Button className='text-xl normal-case btn btn-ghost'>auth</Button>
          </Link>
          <ThemeToggler />
        </Navbar.Start>

        <Navbar.End>
          {!userInfo?.id ? (
            <>
              <Link to='/signup'>
                <Button onClick={() => setIsLogin(false)} color={isLogin ? 'ghost' : 'primary'}>
                  Sign Up
                </Button>
              </Link>
              <Link to='/login'>
                <Button onClick={() => setIsLogin(true)} color={isLogin ? 'primary' : 'ghost'}>
                  <FaArrowRightToBracket />
                  Log In
                </Button>
              </Link>
            </>
          ) : (
            <>
              <LogoutButton className='btn btn-ghost' />
              <Link to='/profile'>
                <Button variant='outline' color='primary' className='text-white'>
                  <FaUserAlt />
                  Profile
                </Button>
              </Link>
            </>
          )}
        </Navbar.End>
      </Navbar>
    </>
  );
}

export default Header;
