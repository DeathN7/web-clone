import './App.css';
import Home from './HomeScreen/Home';
import Login from './LoginScreen/Login';
import SignUpScreen from './SignUpScreen/SignUpScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
