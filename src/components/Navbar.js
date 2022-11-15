import React from "react";
import "../css-files/Navbar.css";
function Navbar(){
    return(
        <div class="navbar-bar">
            <nav class="navbar-style">
      <ul class="navbar-list">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
</nav>
        </div>
    );
}

export default Navbar;