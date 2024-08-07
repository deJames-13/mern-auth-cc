import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { errorHandler } from '../utils/responseHandler.js';
import { validate } from '../utils/validate.js';
import { userValidationRules } from '../validations/userValidation.js';

const showUser = asyncHandler(async (req, res) => {});

const createUser = asyncHandler(async (req, res) => {
  await validate(req, res, userValidationRules);

  const data = User.filterFillables(req.body);
  const userExists = await User.findOne({ email: data.email });

  if (userExists) return errorHandler({ res, message: 'User already exists' });
  const user = new User(data);
  await user.validate();
  await user.save();

  return user;
});

const updateUser = asyncHandler(async (req, res) => {});

const deleteUser = asyncHandler(async (req, res) => {});

export { createUser, deleteUser, showUser, updateUser };

