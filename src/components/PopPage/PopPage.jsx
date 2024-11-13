import React from 'react'
import Nav from '../Nav/Nav'
import './poppage.css'


function PopPage() {
  return (
    <>
    <Nav/>
    <div className="Pop-Content" >
        <div className="search">
          <form className="Search-P" action="">
            <div className="SearchBars">
              <input type="text" placeholder="Lyrics..." />
            </div>
          </form>
        </div>
        <div className="News">
          <div className="News-Content">
            <div className="Popular-Pop">Popular</div>
            <div className="Artist-Pop">Artist</div>
            <div className="Music-Pop">
              <div className='Music-Pop-1' ></div>
              <div className='Music-Pop-2' ></div>
              <div className='Music-Pop-3' ></div>
            </div>
          </div>
        </div>
    </div>
    <footer className="Footer">
      <div className="footer" >
        <p>FineMusic By @kamerajanakute</p>
      </div>
    </footer>
    </>
  )
}

export default PopPage