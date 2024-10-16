import React from "react";
import "./searchpage.css";
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
      {/* Nav2 */}

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
