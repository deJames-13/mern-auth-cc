import { useRef } from 'react';
import { Button, Card, Form, Hero, Input } from 'react-daisyui';
import { Link } from 'react-router-dom';

function LogIn({ ...props }) {
  const fields = {
    email: '',
    password: '',
  };
  const values = useRef(fields);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(Object.values(values.current).map((field) => field.value));
  };

  return (
    <div className='max-w-5xl'>
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
                  type='text'
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
                <Button>Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </Hero.Content>
      </Hero>
    </div>
  );
}

export default LogIn;
