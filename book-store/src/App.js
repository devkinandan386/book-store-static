import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Books from "./pages/Books";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <nav style={styles.navbar}>
        <h1>📚 Book Store</h1>
        <div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/books" style={styles.link}>Books</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer style={styles.footer}>© 2025 Book Store. All rights reserved.</footer>
    </Router>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#2c3e50",
    color: "white",
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
  footer: {
    textAlign: "center",
    padding: "10px",
    marginTop: "20px",
    backgroundColor: "#2c3e50",
    color: "white",
  }
};

export default App;
