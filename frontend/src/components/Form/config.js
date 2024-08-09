import { PropTypes } from 'prop-types';
export const propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  pattern: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  refer: PropTypes.object,
  error: PropTypes.string,
};
