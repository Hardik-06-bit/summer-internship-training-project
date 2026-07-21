import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// In-Memory Users Storage (Bina MongoDB ke chalega)
const users = [];

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret123';

// Register Route
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password, role, department } = req.body;
  try {
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      _id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      role: role || 'student',
      department: department || 'Computer Science',
    };

    users.push(newUser);

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '30d' });

    console.log('✅ User Registered Successfully:', newUser.email);
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login Route
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30d' });

    console.log('🔑 User Logged In Successfully:', user.email);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      department: user.department,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('EduManage Backend API is running perfectly!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));