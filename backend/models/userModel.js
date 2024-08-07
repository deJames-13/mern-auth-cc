import Model from './model.js';
const User = new Model({
  name: 'User',
  schema: [
    {
      name: {
        type: String,
        required: [true, 'Name is required'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
      },
      password: {
        type: String,
        required: [true, 'Password is required'],
      },
    },
    { timestamps: true },
  ],
});
User.fillables = ['name', 'email', 'password'];
User.hidden = ['password'];

export default User;
