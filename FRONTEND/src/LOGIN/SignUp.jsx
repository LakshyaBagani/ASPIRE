import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert("Sign-up successful!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-blue-700 p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-opacity-20 backdrop-blur-xl"></div>
            <div className="relative bg-gray-900 shadow-2xl rounded-2xl p-8 w-96 border border-blue-500">
                <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-6">Create Account</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition duration-300 hover:border-blue-400 hover:shadow-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition duration-300 hover:border-blue-400 hover:shadow-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition duration-300 hover:border-blue-400 hover:shadow-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-medium mb-2">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition duration-300 hover:border-blue-400 hover:shadow-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-blue-500/50"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-sm text-blue-400 mt-4 text-center">
                    
                    <button onClick={() => navigate("/Login")} className="hover:underline ml-1">Already have an account</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
