import React from 'react'
import Nav from '../Nav/Nav'
import './metalpage.css'

function MetalPage() {
  return (
    <>
    <Nav/>
    <div>
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

export default MetalPage