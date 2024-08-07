import asyncHandler from 'express-async-handler';

const authenticate = asyncHandler(async (req, res) => {
  res.status(418);
  throw new Error("I'm a teapot");
});
const register = asyncHandler(async (req, res) => {});
const logout = asyncHandler(async (req, res) => {});

export { authenticate, logout, register };
