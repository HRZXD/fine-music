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
        <div className="Music-Data">
          <div className="Music-Box">
            <div className="Music-Seacrh">
              <div className="Head-Music">
                <a href="">Music-Name</a>
              </div>
              <div className="Heart" >
                <button className="Like-Heart" >❤</button>
              </div>
              <div className="Img">
                <div className="Music-Thumnail"></div>
              </div>
              <div className="lyric">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia alias laudantium recusandae asperiores  dignissimos non inventore!</span>
              </div>
            </div>
            <div className="Music-Seacrh">
              <div className="Head-Music">
                <a href="">Music-Name</a>
              </div>
              <div className="Heart" >
                <button className="Like-Heart" >❤</button>
              </div>
              <div className="Img">
                <div className="Music-Thumnail"></div>
              </div>
              <div className="lyric">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia alias laudantium recusandae asperiores  dignissimos non inventore!</span>
              </div>
            </div>
            <div className="Music-Seacrh">
              <div className="Head-Music">
                <a href="">Music-Name</a>
              </div>
              <div className="Heart" >
                <button className="Like-Heart" >❤</button>
              </div>
              <div className="Img">
                <div className="Music-Thumnail"></div>
              </div>
              <div className="lyric">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia alias laudantium recusandae asperiores  dignissimos non inventore!</span>
              </div>
            </div>
          </div>
        </div>
    <footer className="Footer">
      <div className="footer" >
        <p>@FineMusicBy....</p>
      </div>
    </footer>
    </>
  );
}

export default SearchPage;
