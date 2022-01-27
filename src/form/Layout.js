import React from 'react';
import { Link,Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <div>
            <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/greeting">Greeting Msg</Link>
          </li>
          <li>
            <Link to="/currentTime">currentTime</Link>
          </li>
          <li>
            <Link to="/runningTime">Running Time</Link>
          </li>
          <li>
            <Link to="/stateEg">State Eg</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/todo">ToDO project</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
        </div>
    );
};

export default Layout;