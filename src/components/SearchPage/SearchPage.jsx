import React from "react";
import "./searchpage.css";
import ToggleMenu from "./toggleMenu.js";

function SearchPage() {
  return (
    <header className="Main">
      <div className="Header">
        <a href="#Home">Home</a>
        <a href="Contact">Contact</a>
        
      </div>
      {/* Nav1 */}
      <div className="Nav1">
        <a href="PopMusic">Pop Music</a>
        <a href="Metal">Metal</a>
        <a href="HipHop">Hip Hop</a>
        <a href="Jazz">Jazz</a>
      </div>
      {/* SideMenu */}
      <aside className="FavBar">
        <div className="container-d">
          <nav className="nav-toggle">
            <div className="menu-open" onClick={ToggleMenu()} />
            <label className="menu-open-button" htmlFor="menu-open">
              <span className="lines line-1"></span>             
              <span className="lines line-2"></span>             
              <span className="lines line-3"></span>             
            </label>
            {/* List */}
            <div className="List" id="songContainer" >
              <div className="List-header"></div>
                <span>PinSong</span>
                <ul className="song-list" >
                  <li className="song-item">
                    <div className="thumnail"></div>
                    <div className="song-info">
                      <span className="song-title"></span>
                      <span className="song-description"></span>
                    </div>
                  </li>
                </ul>
              </div>
          </nav>
        </div>
            
      </aside>

      {/* searchBars */}

      <form className="Search" action="">
        <div className="SearchBars">
          
          <input type="text" placeholder="Search" />
        </div>
      </form>

    </header>
    
  );
}

export default SearchPage;
