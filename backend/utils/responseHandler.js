const errorHandler = ({
  res,
  statusCode = 400,
  errorMessage = 'Unknown error',
}) => {
  res.status(statusCode);
  throw new Error(errorMessage);
};

const successHandler = ({ res, statusCode = 200, message, ...details }) => {
  return res.status(statusCode).json({
    success: true,
    status: statusCode,
    message: message ?? '',
    ...details,
  });
};

export { errorHandler, successHandler };
