import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from './assets/logo.svg'

function Navbar({ setCategory, setSearchQuery, theme, setTheme }) {
    const [search, setSearch] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setSearchQuery(search);
            setIsMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" className="logo" />
                <h2 className="title">Summatrix AI</h2>
            </div>

            <button className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? "✕" : "☰"}
            </button>

            <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
                <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                <select className="nav-select" onChange={(e) => {
                    setCategory(e.target.value);
                    setSearchQuery("");
                    setIsMenuOpen(false);
                }} defaultValue="technology">
                    <option value="technology">Technology</option>
                    <option value="business">Business</option>
                    <option value="science">Science</option>
                    <option value="health">Health</option>
                    <option value="sports">Sports</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                
                <div className="navbar-search-mobile">
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="search-input"
                    />
                </div>
            </div>

            <div className="navbar-search">
                <input
                    type="text"
                    placeholder="Search news..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="search-input"
                />
            </div>

            <div className="navbar-right">
                <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? "🌙" : "☀️"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
