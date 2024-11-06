import React from "react";
import "./searchpage.css";
// import ToggleMenu from "./toggleMenu.js";


function SearchPage() {
  const ToggleMenu = () => {
    let songContainer = document.getElementById("songContainer");
    if (songContainer.style.display === "none" || songContainer.style.display === "") {
        songContainer.style.display = "block"; // แสดง container เมื่อกดไอคอน
    } else {
        songContainer.style.display = "none"; // ซ่อน container เมื่อกดอีกครั้ง
    }
  }
  return (
    <header className="Main">
      <div className="Header">
        <a href="SearchPage">Home</a>
        <a href="Contact">Contact</a>
        
      </div>
      {/* Nav1 */}
      <div className="Nav1">
        <a href="PopMusic">Pop Music</a>
        <a href="Metal">Metal</a>
        <a href="HipHopPage">Hip Hop</a>
        <a href="Jazz">Jazz</a>
      </div>
      {/* SideMenu */}
      <aside className="FavBar">
        <div className="container-d">
          <nav className="nav-toggle">
            <label className="menu-open-button" htmlFor="menu-open" onClick={ToggleMenu} >
                <span className="lines line-1"></span>             
                <span className="lines line-2"></span>             
                <span className="lines line-3"></span>             
            </label>
            {/* List */}
            <div className="List" id="songContainer" >
              <div className="List-header">
                <span>PinSong</span>
              </div>
                <ul className="song-list" >
                  <li className="song-item">
                    <div className="thumnail"></div>
                    <div className="song-info">
                      <span className="song-title">Song #1</span>
                      <span className="song-description">Lorem ipsum dolor sit amet </span>
                    </div>
                    <div className="Heart">
                      <div className="Like"></div>
                    </div>
                  </li>
                </ul>
            </div>    
          </nav>
        </div>
            
      </aside>
      {/* img */}

      
            {/* searchBars */}
      <div className="main-content">
        <form className="Search" action="">
          <div className="SearchBars">
            <input type="text" placeholder="Lyrics..." />
          </div>
        </form>
      </div>

    </header>
    
  );
}

export default SearchPage;
