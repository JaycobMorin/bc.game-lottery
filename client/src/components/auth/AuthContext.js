import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';
import {
    toast
} from 'react-toastify';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const checkLogin = () => {
            const savedToken = localStorage.getItem('token');
            setToken(savedToken);
            if (savedToken) {
                setIsAuthenticated(true);
                setUser(jwtDecode(savedToken));
            }
        }
        checkLogin();
    }, []);

    useEffect(() => {
        console.log('Updated User:', user);
    }, [user]);

    const login = async (email, password) => {
        const response = await axios.post('/api/auth/login', { email, password }, { withCredentials: true });
        if (response.data.message === 'Invalid credentials') {
            return toast.error('Email or Password is incorrect.');
        }
        const receivedToken = response.data.token;
        localStorage.setItem('token', receivedToken); // Store token
        setToken(receivedToken); // Update state
        setIsAuthenticated(true); // Set authentication state
        setUser(jwtDecode(receivedToken)); // Decode token to get user details
        toast.success('Login Successfully.');
        console.log(user);

        return response;
    };


    const logout = async () => {
        console.log(user);

        await axios.post('/api/auth/logout').then((res) => {
            if (res.data.msg == "logout success") toast.info('Logout Success!')
        });
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null); // Reset user on logout
    };

    return (<AuthContext.Provider value={
        {
            user,
            login,
            logout,
            isAuthenticated
        }
    } > {
            children
        } </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);