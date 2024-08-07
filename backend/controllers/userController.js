import asyncHandler from 'express-async-handler';
import * as userService from '../services/userService.js';
import { errorHandler, successHandler } from '../utils/responseHandler.js';

// @desc    Authenticate user & get token
// route    POST /api/users/authenticate
// @access  Public
const authenticate = asyncHandler(async (req, res) => {
  successHandler({ res, message: 'Authenticated!' });
});

// @desc    Register a new user
// route    POST /api/users
// @access  Public
const register = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req, res, req.body);
  if (user) successHandler({ res, message: 'Registered!', user });
  else errorHandler({ res, statusCode: 500 });
});

// @desc    Log user out
// route    POST /api/users/logout
// @access  Public
const logout = asyncHandler(async (req, res) => {
  successHandler({ res, message: 'Logged out!' });
});

// @desc    Log user out
// route    GET /api/users/profile
// @access  Private
const getProfile = asyncHandler(async (req, res) => {
  successHandler({ res, message: 'Profile!' });
});

// @desc    Log user out
// route    PUT /api/users/profile
// @access  Private
const updateProfile = asyncHandler(async (req, res) => {
  successHandler({ res, message: 'Profile updated!' });
});

export { authenticate, getProfile, logout, register, updateProfile };
