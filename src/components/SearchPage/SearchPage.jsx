import React from "react";
import "./searchpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchPage() {
  return (
    <div className="Main">
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
      {/* SideBar */}
      <header className="FavBar">
        <nav className="navbar-toggle">
          <input type="checkbox" href="#" class="menu-open" cheked/>
          <label class="menu-open-button" For="menu-open">
            <span className="lines lines-1"></span>             
          </label>
          
          <a href="#" class="menu-item"><i class="" ></i></a>
        
        </nav>
      </header>
              
        
              


      {/* searchBars */}
      <form className="Search" action="">
        <div className="SearchBars">
          
          <input type="text" placeholder="Search" />
        </div>
      </form>

      <main className="Background">
     
      </main>
      

    </div>
  );
}

export default SearchPage;
