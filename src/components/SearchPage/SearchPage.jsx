import React from "react";
import "./searchpage.css";
function SearchPage() {
  return (
    <div className="Searchbar">
      <div className="Header">
        <a href="#Home">Home</a>
        <a href="Contact">Contact</a>
      </div>
      <div className="Nav">
        <a href="PopMusic">Pop Music</a>
        <a href="Metal">Metal</a>
        <a href="HipHop">Hip Hop</a>
        <a href="Jazz">Jazz</a>
      </div>
      <form className="Search" action="">
        <div className="SearchBars">
          <input type="text" placeholder="Search.." />
        </div>
      </form>
    </div>
  );
}

export default SearchPage;
