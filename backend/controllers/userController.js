const authenticate = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Authenticate',
  });
});
const register = async (req, res) => {};
const logout = async (req, res) => {};

export { authenticate, logout, register };
