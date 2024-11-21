import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles.css';

const container = document.getElementById('root'); // Get the root DOM node
const root = createRoot(container); // Create a root
root.render(
    <Router>
        <App />
    </Router>
); // Render your application