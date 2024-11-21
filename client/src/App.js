import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import LotteryDetail from './components/LotteryDetail';
import { AuthProvider } from './components/auth/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // Function to toggle the menu
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainMenu />}></Route>
          <Route path="/detail/:id" element={<LotteryDetail />}></Route>
        </Routes>

        {/* <Footer /> */}
      </div>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;