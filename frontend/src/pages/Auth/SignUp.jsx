import { useRef } from 'react';
import { Button, Card, Form, Hero, Input } from 'react-daisyui';

function SignUp({ ...props }) {
  const fields = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  const values = useRef(fields);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(Object.values(values.current).map((field) => field.value));
  };

  return (
    <div className='max-w-5xl'>
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
                      type='text'
                      className='input-bordered'
                    />
                  </Form>
                );
              })}

              <Form className='mt-6' onSubmit={handleSubmit}>
                <Button type='submit'>Sign Up</Button>
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
