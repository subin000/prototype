import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Sample from './Sample';
import SignupPage from './signup';
import Login from './login';
import Home from './Home';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          console.log("no token found")
        }
        const response = await axios.get('https://ser-2f05.onrender.com/user/profile', {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response && error.response.status === 401) {
          console.log('login');
        }
      }
    };

    fetchUserData();
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem('authToken');
  };

  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/home">Ghar Se</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              <Nav.Link as={Link} to="/book">Bookings</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              {userData ? (
                <>
                <Nav.Item style={{color : "white"}}>Hello, {userData.name}</Nav.Item>
                <Nav.Link as={Link} to="/login" onClick={handleLogout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<sample/>}></Route>
          <Route path="/book" element={<Sample />} />
          <Route path="/home" default element={<Home />} />
          <Route path="/bookpage" element={<Sample />} />
          <Route path="/profile" element={<Sample />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/hotelupload" element={<Sample />} />
          <Route path="/room" element={<Sample />} />
          <Route path="/payment" element={<Sample />} />
          <Route path="/admin" element={<Sample />} />
          <Route path="/adminroute" element={<Sample />} />
          <Route path="/hotel-details/:id" element={<Sample />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;