import React from 'react'
export default function Register(){
  return (
    <div className="max-w-xl mx-auto glass p-8 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
      <div className="space-y-3">
        <input placeholder="Full name" className="w-full p-3 rounded-lg bg-white/5"/>
        <input placeholder="Email" className="w-full p-3 rounded-lg bg-white/5"/>
        <input placeholder="Password" type="password" className="w-full p-3 rounded-lg bg-white/5"/>
        <select className="w-full p-3 rounded-lg bg-white/5"><option>Student</option><option>Teacher</option></select>
        <button className="btn-accent w-full text-white mt-2">Create account</button>
      </div>
    </div>
  )
}
