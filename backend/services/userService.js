import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { errorHandler, successHandler } from '../utils/responseHandler.js';

const showUser = asyncHandler(async (req, res) => {});

const createUser = asyncHandler(async (res, data) => {
  data = User.filterFillables(data);
  const userExists = await User.findOne({ email: data.email });

  if (userExists)
    return errorHandler({ res, errorMessage: 'User already exists' });
  const user = new User(data);
  await user.validate();
  await user.save();

  return user;
});

const updateUser = asyncHandler(async (req, res) => {});

const deleteUser = asyncHandler(async (req, res) => {});

export { createUser, deleteUser, showUser, updateUser };
