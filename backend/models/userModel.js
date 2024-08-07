import bcrypt from 'bcryptjs';
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
User.statics.fillables = ['name', 'email', 'password'];
User.statics.hidden = ['password'];
User.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

export default User.makeModel();
