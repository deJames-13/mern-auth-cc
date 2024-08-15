import { useRef } from 'react';
import { Button, Form, Input } from 'react-daisyui';
import { useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from '../../components';
import { setCredentials, usersApi } from '../../slices';

function ProfileEdit() {
  const fields = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  const { userInfo } = useOutletContext();
  const values = useRef(fields);
  const dispatch = useDispatch();
  const [updateProfile, { isLoading }] = usersApi.useUpdateProfileMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = Object.keys(values.current).reduce((acc, key) => ({ ...acc, [key]: values.current[key].value }), {});

    console.table(payload);

    try {
      const res = await updateProfile(payload).unwrap();
      dispatch(setCredentials(res.user));
      toast.success('Update profile successful');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <h1 className='text-xl font-bold'>Edit</h1>
      {Object.keys(fields).map((field, index) => {
        return (
          <Form key={index}>
            <Form.Label title={field.replace('_', ' ')} className='font-bold capitalize text-base-100 text-opacity-40' />
            <Input
              ref={(el) => {
                values.current[field] = el;
              }}
              defaultValue={userInfo[field]}
              type={['email', 'password'].includes(field.split('_')[0]) ? field.split('_')[0] : 'text'}
              className='input-bordered'
            />
          </Form>
        );
      })}
      <div className='divider'></div>
      <Form className='mt-6' onSubmit={handleSubmit}>
        <Button color='primary' type='submit'>
          Save
        </Button>
      </Form>
    </>
  );
}

export default ProfileEdit;
