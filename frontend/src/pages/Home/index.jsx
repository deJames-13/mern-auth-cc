import { FaGithubAlt } from 'react-icons/fa';
import { LinkButton } from './../../components';
function Home() {
  return (
    <div className='container grid h-screen max-w-md p-8 mx-auto place-items-center'>
      <div className='text-center'>
        <h1 className='text-lg font-bold'>Mern Authentication CC</h1>
        <LinkButton to='https://github.com/deJames-13' className='flex items-center link '>
          <FaGithubAlt className='mr-2' />
          deJames-13
        </LinkButton>
      </div>
    </div>
  );
}

export default Home;
