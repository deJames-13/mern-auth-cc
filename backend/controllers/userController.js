import asyncHandler from 'express-async-handler';
import * as userService from '../services/userService.js';
import { errorHandler, successHandler } from '../utils/responseHandler.js';
import { destroyToken, generateToken } from '../utils/tokenHandler.js';
import UserResource from './../resources/userResource.js';

// @desc    Get all users
// route    GET /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await userService.getUsers(req, res);

  successHandler({
    res,
    message: 'Users!',
    users: users,
  });
});

// @desc    Get first user that match the id
// route    GET /api/users
// @access  Public
const getUser = asyncHandler(async (req, res) => {
  let user = await userService.getUser(req, res);

  successHandler({ res, message: 'User!', user: UserResource.make(user) });
});

// @desc    Authenticate user & get token
// route    POST /api/users/authenticate
// @access  Public
const authenticate = asyncHandler(async (req, res) => {
  const { password } = req.body;
  let user = await userService.getUser(req, res);

  if (!user || !(user && (await user.matchPassword(password))))
    errorHandler({ res, statusCode: 401, message: 'Invalid credentials' });

  generateToken(res, user._id);
  successHandler({
    res,
    message: 'Authenticated!',
    user: UserResource.make(user),
  });
});

// @desc    Register a new user
// route    POST /api/users
// @access  Public
const register = asyncHandler(async (req, res) => {
  const userExists = await userService.getUser(req, res);
  if (userExists) return errorHandler({ res, message: 'User already exists' });

  const user = await userService.createUser(req, res);
  if (user) generateToken(res, user._id);
  else errorHandler({ res, message: 'Invalid user data!' });

  successHandler({
    res,
    message: 'Registered!',
    user: UserResource.make(user),
  });
});

// @desc    Log user out
// route    POST /api/users/logout
// @access  Public
const logout = asyncHandler(async (req, res) => {
  destroyToken(res);

  successHandler({ res, message: 'Logged out!' });
});

// @desc    Get user profile
// route    GET /api/users/profile
// @access  Private
const getProfile = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user._id)
    return errorHandler({ res, statusCode: 401, message: 'Unauthorized' });

  successHandler({ res, message: 'Profile fetch successfully!', user });
});

// @desc    Update user profile
// route    PUT /api/users/profile
// @access  Private
const updateProfile = asyncHandler(async (req, res) => {
  successHandler({ res, message: 'Profile updated!' });
});

export {
  authenticate,
  getProfile,
  getUser,
  getUsers,
  logout,
  register,
  updateProfile,
};
