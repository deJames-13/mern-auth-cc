import { useRef } from 'react';
import { Button, Card, Form, Hero, Input } from 'react-daisyui';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from './../../components';
import { setCredentials, usersApi } from './../../slices';

function SignUp({ ...props }) {
  const fields = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  const values = useRef(fields);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading }] = usersApi.useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = Object.keys(values.current).reduce((acc, key) => ({ ...acc, [key]: values.current[key].value }), {});

    console.table(payload);

    try {
      const res = await register(payload).unwrap();
      dispatch(setCredentials(res.user));
      navigate('/');
      toast.success('Registration successful');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className='max-w-5xl'>
      {isLoading && <Spinner />}
      <Hero {...props}>
        <Hero.Content className='flex-col-reverse lg:flex-row-reverse'>
          <Card className='flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <Card.Body>
              {Object.keys(fields).map((field, index) => {
                return (
                  <Form key={index}>
                    <Form.Label title={field.replace('_', ' ')} className='capitalize' />
                    <Input
                      ref={(el) => {
                        values.current[field] = el;
                      }}
                      type={['email', 'password'].includes(field.split('_')[0]) ? field.split('_')[0] : 'text'}
                      className='input-bordered'
                    />
                  </Form>
                );
              })}

              <Form className='mt-6' onSubmit={handleSubmit}>
                <Button color='primary' type='submit'>
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className='text-center lg:text-right'>
            <h1 className='text-5xl font-bold'>Sign Up!</h1>
            <p className='py-6'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </Hero.Content>
      </Hero>
    </div>
  );
}

export default SignUp;
