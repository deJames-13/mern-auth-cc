import { Button, Hero } from 'react-daisyui';
import { Link } from 'react-router-dom';

function HeroWrapper({ ...props }) {
  return (
    <Hero {...props}>
      <Hero.Content className='text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>MERN Authentication</h1>
          <p className='py-6'>A simple MERN stack authentication boilerplate.</p>

          <Link to='/login'>
            <Button color='primary'>Get Started</Button>
          </Link>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default HeroWrapper;
