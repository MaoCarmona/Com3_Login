import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <header className="header">Dashboard</header>
            <div className="main-content">
                <aside className="sidebar">
                    <nav>
                        <a href="/">Home</a>
                    </nav>
                </aside>
                <main className="content">
                    <h2>Welcome to your Dashboard</h2>
                    <p>Here is an example for an aplication on a server in a private LAN.</p>
                    <p>Made by Kevin Mauricio Carmona Loaiza.</p>

                </main>
            </div>
            <footer className="footer">© 2024 UTP - Comunicaciones III</footer>
        </div>
    );
};

export default Dashboard;
