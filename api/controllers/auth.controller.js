import User from '../models/user.model.js';
import bcrypt, { hash } from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async(req, res,next) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); 
  console.log(req.body);
  const newUser = new User({ username, email, password:hashedPassword}); // In a 

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
    next(errorHandler(500, 'Error registering user'));
  }

 

  res.status(201).json({ message: 'User registered successfully' });

};