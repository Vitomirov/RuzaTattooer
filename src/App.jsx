import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Gallery from "./Gallery";
import './styles.css'; 
import Contact from "./Contact";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </Router>
        
    );
} 

function Home() {
    return (
        <>
            <header className="title">
                <h1>Ruza Tattooer</h1>
                <nav className="navLinks">
                    <Link to="/about" className="links" >About</Link>
                    <Link to="/gallery" className="links">Gallery</Link>
                    <Link to="/contact" className="links">Contact</Link>
                </nav>     
            </header>
            <hr />
        </>
    );
} 

export default App;
