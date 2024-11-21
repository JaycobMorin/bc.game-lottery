import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';

const SignupModal = ({ isOpen, onClose, children }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('/api/auth/register', { email, username, password }).then((res) => {
            if (res.data.message == 'Username already exists') return toast.error("Username Already Exists!");
            else if (res.data.message == "User registered successfully") {
                toast.success("Registered Successfully!");
                onClose();
            } 
                
        })

        console.log('Email:', email);
        console.log('Password:', password);
    };
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-gray-900 opacity-70" onClick={onClose}></div>
                <div className="bg-white rounded-lg shadow-lg p-6 w-96 z-10">
                    <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="text-gray-900 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="text-gray-900 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="text-gray-900 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Sign Up</button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">Already have an account? <a href="#" className="text-blue-500 hover:underline">Sign In</a></p>
                    </div>
                    <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>&times;</button>
                </div>
            </div>
        </>
    );
};

export default SignupModal;