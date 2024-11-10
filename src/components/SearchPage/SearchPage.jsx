import React from "react";
import "./searchpage.css";
import Nav from "../Nav/Nav";
// import ToggleMenu from "./toggleMenu.js";


function SearchPage() {
  return (
    <>
    <Nav />
    <header className="Main">
        {/* searchBars */}
        <div className="main-content">
          <form className="Search" action="">
            <div className="SearchBars">
              <input type="text" placeholder="Lyrics..." />
            </div>
          </form>
        </div>
        <div className="Music-Data">
          <div className="Music-Box">
            <div className="Music-Seacrh">
              <div className="Head-Music">
                <a href="">Music-Name</a>
              </div>
              <div className="Music-detail">
                <div className="Music-Thumnail">

                </div>
              </div>
            </div>
            <div className="Music-Seacrh">
              <div className="Head-Music">
                <a href="">Music-Name</a>
              </div>
            </div>
            <div className="Music-Seacrh">
              <div className="Head-Music">
                <a href="">Music-Name</a>
              </div>
            </div>
            
          </div>
        </div>
    </header>
    <footer className="Footer">
      <div className="footer" >
        <p>@FineMusicBy....</p>
      </div>
    </footer>
    </>
  );
}

export default SearchPage;
