import asyncHandler from 'express-async-handler';

// @desc    Authenticate user & get token
// route    POST /api/users/authenticate
// @access  Public
const authenticate = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: 'Authenticated!' });
});

// @desc    Register a new user
// route    POST /api/users
// @access  Public
const register = asyncHandler(async (req, res) => {
  return res.status(201).json({ message: 'Registered!' });
});

// @desc    Log user out
// route    POST /api/users/logout
// @access  Public
const logout = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: 'Logged out!' });
});

// @desc    Log user out
// route    GET /api/users/profile
// @access  Private
const getProfile = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: 'Profile information.' });
});

// @desc    Log user out
// route    PUT /api/users/profile
// @access  Private
const updateProfile = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: 'Profile updated' });
});

export { authenticate, getProfile, logout, register, updateProfile };
