import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 1️⃣ Firebase sign in
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      // 2️⃣ Get Firestore role
      const userRef = doc(db, "users", userCred.user.uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        const role = snap.data().role;

        // 3️⃣ Redirect based on role
        if (role === "student") {
          navigate("/student");
        } else if (role === "teacher") {
          navigate("/teacher");
        } else {
          setError("Invalid role assigned. Contact admin.");
        }
      } else {
        setError("User record not found in Firestore.");
      }
    } catch (err) {
      console.error("Login error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="glass p-8 max-w-md mx-auto rounded-2xl">
      <h2 className="text-2xl mb-4 font-semibold">Login</h2>
      <form onSubmit={handleLogin} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/5"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/5"
        />
        <button
          type="submit"
          className="btn-accent w-full text-white py-2 rounded-lg"
        >
          Login
        </button>
      </form>

      {error && <p className="text-red-400 mt-3">{error}</p>}
    </div>
  );
}
