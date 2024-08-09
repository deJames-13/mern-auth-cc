import { PropTypes } from 'prop-types';
import { FaMoon, FaSun } from 'react-icons/fa';
const propTypes = { theme: PropTypes.string, size: PropTypes.number };
function ThemeController({ theme = 'light' }) {
  return (
    <>
      <label className='h-full aspect-square swap swap-rotate'>
        <input type='checkbox' className='theme-controller' value={theme} />
        <span className='swap-on'>
          <span className='text-xs'>
            <FaSun />
          </span>
        </span>

        <span className='swap-off'>
          <span className='text-xs'>
            <FaMoon />
          </span>
        </span>
      </label>
    </>
  );
}
ThemeController.propTypes = propTypes;

export default ThemeController;
