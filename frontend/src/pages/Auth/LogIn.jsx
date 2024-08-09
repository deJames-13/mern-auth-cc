import { useRef } from 'react';
import { Button, Card, Form, Hero, Input } from 'react-daisyui';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from './../../components';
import { setCredentials, usersApi } from './../../slices';

function LogIn({ ...props }) {
  const fields = {
    email: '',
    password: '',
  };

  const values = useRef(fields);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = usersApi.useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = values.current;
    const payload = {
      email: email.value,
      password: password.value,
    };

    try {
      const res = await login(payload).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (e) {
      toast.error(e?.data?.message || e.error);
    }
  };

  return (
    <div className='max-w-5xl'>
      {isLoading && <Spinner />}
      <Hero {...props}>
        <Hero.Content className='flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <Card className='flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <Card.Body>
              <Form>
                <Form.Label title='Email' />
                <Input
                  ref={(el) => {
                    values.current.email = el;
                  }}
                  type='text'
                  placeholder='email'
                  className='input-bordered'
                />
              </Form>
              <Form>
                <Form.Label title='Password' />
                <Input
                  ref={(el) => {
                    values.current.password = el;
                  }}
                  type='password'
                  placeholder='password'
                  className='input-bordered'
                />
                <label className='label'>
                  <Link href='#' className='label-text-alt' hover='true'>
                    Forgot password?
                  </Link>
                </label>
              </Form>
              <Form className='mt-6' onSubmit={handleSubmit}>
                <Button type='submit'>Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </Hero.Content>
      </Hero>
    </div>
  );
}

export default LogIn;
