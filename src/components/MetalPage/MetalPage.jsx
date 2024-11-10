import React from 'react'
import Nav from '../Nav/Nav'
import './metalpage.css'

function MetalPage() {
  return (
    <>
    <Nav/>
    <div className='Metal-Content'>
      <div className="seacrh">
          <form className="Search-P" action="">
            <div className="SearchBars">
              <input type="text" placeholder="Lyrics..." />
            </div>
          </form>
      </div>
      <div className="News">
          <div className="News-Content">
            <div className="Popular-Metal">Popular</div>
            <div className="Artist-Metal">Artist</div>
            <div className="Music-Metal">
              <div className='Music-Metal-1' ></div>
              <div className='Music-Metal-2' ></div>
              <div className='Music-Metal-3' ></div>
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

export default MetalPage