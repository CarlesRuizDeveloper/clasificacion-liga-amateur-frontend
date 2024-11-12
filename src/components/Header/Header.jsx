import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Header.css";

const Header = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        if (isAuthenticated) {
            navigate('/logout');
        }
    };

    return (
        <header className="header">
            <div className="header-content">
                <h1 className="title">EF Can Boada PREBENJAMÍ 2017</h1>
                <div className="user-icon">
                    {isAuthenticated ? (
                        <i
                            className="fas fa-user-circle"
                            style={{ color: "#2aff00", cursor: "pointer" }}
                            onClick={handleLogoutClick}
                        ></i>
                    ) : (
                        <Link to="/login">
                            <i className="fas fa-user-circle" style={{ color: "white" }}></i>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
