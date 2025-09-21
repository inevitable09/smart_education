import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import StudentDashboard from "./components/StudentDashboard";
import TeacherDashboard from "./components/TeacherDashboard";
import Courses from "./pages/Courses";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-72 p-6 sidebar glass">
        <div className="mb-8">
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Poppins" }}>
            SmartLearn
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Adaptive learning platform
          </p>
        </div>
        <nav className="flex flex-col gap-3">
          <Link className="p-3 rounded-md hover:bg-white/5" to="/student">
            Dashboard
          </Link>
          <Link className="p-3 rounded-md hover:bg-white/5" to="/courses">
            Courses
          </Link>
          <Link className="p-3 rounded-md hover:bg-white/5" to="/notifications">
            Notifications
          </Link>
          <Link className="p-3 rounded-md hover:bg-white/5" to="/profile">
            Profile
          </Link>
        </nav>
        <div className="mt-6">
          <Link to="/" className="btn-accent inline-block text-white">
            Sign In
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
