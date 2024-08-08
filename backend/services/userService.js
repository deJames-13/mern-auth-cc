import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { validate } from '../utils/validate.js';
import { userValidationRules } from '../validations/userValidation.js';

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  return users;
});

const getUser = asyncHandler(async (req, res) => {
  const { id, email } = { ...req.params, ...req.body };
  const user = await User.findOne({ $or: [{ _id: id }, { email }] });
  return user;
});

const createUser = asyncHandler(async (req, res) => {
  await validate(req, res, userValidationRules);
  const data = User.filterFillables(req.body);
  const user = await User.create(data);
  return user;
});

const updateUser = asyncHandler(async (req, res) => {});

const deleteUser = asyncHandler(async (req, res) => {});

export { createUser, deleteUser, getUser, getUsers, updateUser };
