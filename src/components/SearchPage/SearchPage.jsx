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
