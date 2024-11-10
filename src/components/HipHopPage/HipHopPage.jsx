import React from 'react'
import Nav from '../Nav/Nav'
import './hiphoppage.css'

function HipHopPage() {
  return (
      <>
      <Nav /> 
      <div className="HipHop-Content">
        <div className="seach">
          <form className="Search-P" action="">
            <div className="SearchBars">
              <input type="text" placeholder="Lyrics..." />
            </div>
          </form>
        </div> 
        <div className="News">
            <div className="News-Content">
                <div className="Popular-Jazz">Popular</div>
                <div className="Artist-Jazz">Artist</div>
                <div className="Music-Jazz">
                  <div className='Music-Jazz-1' ></div>
                  <div className='Music-Jazz-2' ></div>
                  <div className='Music-Jazz-3' ></div>
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
  )
}

export default HipHopPage