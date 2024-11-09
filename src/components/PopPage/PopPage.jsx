import React from 'react'
import Nav from '../Nav/Nav'
import './poppage.css'


function PopPage() {
  return (
    <>
    <Nav/>
    <div className="HipHop-Content" >
        <form className="Search-P" action="">
          <div className="SearchBars">
            <input type="text" placeholder="Lyrics..." />
          </div>
        </form>
        <div className="News">
          <div className="News-Content">
            <div className="Popular">Popular</div>
            <div className="Artist">Artist</div>
            <div className="Music">Music</div>
          </div>
        </div>
    </div>
    </>
  )
}

export default PopPage