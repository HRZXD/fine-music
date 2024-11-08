import React from 'react'
import Nav from '../Nav/Nav'
import './poppage.css'


function PopPage() {
  return (
    <>
    <Nav/>
    <div className="HipHop-Content" >
      <div className="main-content">
          <form className="Search-P" action="">
            <div className="SearchBars">
              <input type="text" placeholder="Lyrics..." />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopPage