// backend/seed.js
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import Course from './models/Course.js';

const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sih2025';

async function run() {
  await mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to DB for seeding');

  // Remove existing demo data (optional)
  await User.deleteMany({ email: { $in: ['teacher@test.com','student@test.com'] } });
  await Course.deleteMany({ title: /Demo/i });

  // Create teacher
  const passwordHash = await bcrypt.hash('Teacher@123', 10);
  const teacher = await User.create({
    name: 'Demo Teacher',
    email: 'teacher@test.com',
    password: passwordHash,
    role: 'teacher'
  });
  console.log('Created teacher:', teacher.email);

  // Create a demo student (optional)
  const studentHash = await bcrypt.hash('Student@123', 10);
  const student = await User.create({
    name: 'Demo Student',
    email: 'student@test.com',
    password: studentHash,
    role: 'student'
  });
  console.log('Created student:', student.email);

  // Create demo courses
  const courses = [
    { title: 'Demo: Physics Basics', description: 'Kinematics and dynamics', teacher: teacher._id },
    { title: 'Demo: Data Structures', description: 'Arrays, Lists, Trees', teacher: teacher._id }
  ];
  await Course.insertMany(courses);
  console.log('Inserted demo courses');

  await mongoose.disconnect();
  console.log('Seeding finished, disconnected.');
}

run().catch(err => { console.error(err); process.exit(1); });
