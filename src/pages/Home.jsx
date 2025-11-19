import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Click to view <Link to="/portfolio">Portfolio</Link></p>
            <p>Click to view <Link to="/about">About</Link></p>
          </div>
    );
}
export default Home;