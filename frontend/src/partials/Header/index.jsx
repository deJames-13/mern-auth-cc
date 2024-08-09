import { useState } from 'react';
import { Button, Navbar } from 'react-daisyui';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname !== '/signup');
  return (
    <>
      <Navbar>
        <Navbar.Start>
          <Link to='/'>
            <Button onClick={() => setIsLogin(true)} className='text-xl normal-case btn btn-ghost'>
              auth
            </Button>
          </Link>
        </Navbar.Start>

        <Navbar.End>
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
        </Navbar.End>
      </Navbar>
    </>
  );
}

export default Header;
