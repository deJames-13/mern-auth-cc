import { Button, Hero } from 'react-daisyui';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function HeroWrapper({ ...props }) {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Hero {...props}>
      <Hero.Content className='text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>
            {userInfo ? (
              <div>
                Welcome, <span className='text-primary'>{userInfo.name}</span>
              </div>
            ) : (
              'Welcome to MERN Authentication'
            )}
          </h1>
          <p className='py-6'>A simple MERN stack authentication boilerplate.</p>

          <Link to='/login'>{!userInfo?.id && <Button color='primary'>Get Started</Button>}</Link>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default HeroWrapper;
