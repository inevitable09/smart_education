import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [role,setRole]=useState('student')
  const navigate = useNavigate()

  const handleLogin = async ()=>{ navigate(role==='student'?'/student':'/teacher') }

  return (
    <div className="max-w-xl mx-auto glass p-8 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">Welcome back</h2>
      <p className="text-slate-300 mb-6">Sign in to continue to your personalized learning path.</p>
      <div className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded-lg bg-white/5"/>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-3 rounded-lg bg-white/5"/>
        <select value={role} onChange={e=>setRole(e.target.value)} className="w-full p-3 rounded-lg bg-white/5">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button onClick={handleLogin} className="btn-accent w-full text-white mt-2">Sign in</button>
      </div>
      <div className="mt-4 text-sm text-slate-300">Don't have an account? <a href="/register" className="text-white underline">Register</a></div>
    </div>
  )
}
