import { useState } from 'react';
import { Button, Navbar } from 'react-daisyui';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Navbar>
        <Navbar.Start>
          <Link to='/'>
            <Button className='btn btn-ghost normal-case text-xl'>auth</Button>
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
