import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageIndex from "./pages";

const Login = React.lazy(() => import('./pages/login'));
const Cv = React.lazy(() => import('./pages/cv'));

function App() {
  return (
    <Router>
        <Routes>
           <Route path="/login" name="login Page" element={<Login />}/>
           <Route  path="/cv" name="Cv Page" element={<Cv />}/>
           <Route exact path="/" name="Cv Page" element={<PageIndex />}/>
        </Routes>
    </Router>
  );
}

export default App;
