import { PropTypes } from 'prop-types';
import { Button, Hero } from 'react-daisyui';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Guest = () => {
  return (
    <Hero>
      <Hero.Content className='text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Welcome to MERN Authentication</h1>
          <p className='py-6'>A simple MERN stack authentication boilerplate.</p>
          <Link to='/login'>
            <Button color='primary'>Get Started</Button>
          </Link>
        </div>
      </Hero.Content>
    </Hero>
  );
};

const User = ({ userInfo }) => {
  return (
    <Hero>
      <Hero.Content className='text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>
            Welcome, <span className='text-primary'>{userInfo.name}</span>
          </h1>
          <p className='py-6'>A simple MERN stack authentication boilerplate.</p>
          <Link to='/profile'>
            <Button color='primary'>View Profile</Button>
          </Link>
        </div>
      </Hero.Content>
    </Hero>
  );
};
User.propTypes = {
  userInfo: PropTypes.object,
};

function HeroWrapper() {
  const { userInfo } = useSelector((state) => state.auth);

  return <>{userInfo ? <User userInfo={userInfo} /> : <Guest />}</>;
}

export default HeroWrapper;
