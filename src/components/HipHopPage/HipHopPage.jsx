import React from 'react'
import Nav from '../Nav/Nav'
import './hiphoppage.css'

function HipHopPage() {
  return (
    <div class="HipHopPage">
      <>
      <Nav /> 
      <div className="Container">
      <div className="main-content">
        <form className="Search-P" action="">
          <div className="SearchBars">
            <input type="text" placeholder="Lyrics..." />
          </div>
        </form>
      </div> 
      </div>
      </>
    </div>
    
  )
}

export default HipHopPage