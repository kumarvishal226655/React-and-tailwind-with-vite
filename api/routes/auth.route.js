import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

// Define authentication routes here

router.post('/signup',signup);

export default router;