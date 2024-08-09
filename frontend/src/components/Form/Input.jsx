import { propTypes } from './config';

function InputError({ error }) {
  return <span className='text-xs italic text-red-500'>{error}</span>;
}

function Input({ label, refer, ...inputProps }) {
  return (
    <label className='flex items-center gap-2 input input-bordered'>
      <span className='text-gray-400 text-opacity-60'>{label ?? ''}</span>
      <input type='text' className='grow' ref={refer} {...inputProps} />
    </label>
  );
}

Input.propTypes = propTypes;
InputError.propTypes = { error: propTypes.error };

export default Input;
