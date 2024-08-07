import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import UserResource from '../resources/userResource.js';
import { errorHandler } from '../utils/responseHandler.js';
import { validate } from '../utils/validate.js';
import { userValidationRules } from '../validations/userValidation.js';

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  return UserResource.collection(users);
});

const showUser = asyncHandler(async (req, res) => {});

const createUser = asyncHandler(async (req, res) => {
  await validate(req, res, userValidationRules);
  const data = User.filterFillables(req.body);
  const userExists = await User.findOne({ email: data.email });

  if (userExists) return errorHandler({ res, message: 'User already exists' });
  const user = await User.create(data);

  return new UserResource.make(user);
});

const updateUser = asyncHandler(async (req, res) => {});
const deleteUser = asyncHandler(async (req, res) => {});

export { createUser, deleteUser, getUsers, showUser, updateUser };
