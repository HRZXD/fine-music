import react from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
    const ToggleMenu = () => {
     let songContainer = document.getElementById("songContainer");
     if (songContainer.style.display === "none" || songContainer.style.display === "") {
        songContainer.style.display = "block"; // แสดง container เมื่อกดไอคอน
     } else {
        songContainer.style.display = "none"; // ซ่อน container เมื่อกดอีกครั้ง
     }
    }
    return (
        <nav className='Ui' >
            <div className="First-Nav">
                <Link to="/">Home</Link>
                <Link to="Contact">Contact</Link>  
            </div>
            <div className="Second-Nav">
                <Link to="../PopPage">Pop Music</Link>
                <Link to="../MetalPage">Metal</Link>
                <Link to="../HipHopPage">Hip Hop</Link>
                <Link to="../JazzPage">Jazz</Link>
            </div>
            <aside className="FavBar">
                <div className="container-d">
                    {/* <nav className="nav-toggle">
                        <label className="menu-open-button" htmlFor="menu-open" onClick={ToggleMenu} >
                            <span className="lines line-1"></span>             
                            <span className="lines line-2"></span>             
                            <span className="lines line-3"></span>             
                        </label>
                        <div className="List" id="songContainer" >
                            <div className="List-header">
                                <span>PinSong</span>
                            </div>
                            <ul className="song-list" >
                                <li className="song-item">
                                    <div className="thumnail"></div>
                                    <div className="song-info">
                                        <span className="song-title">Song #1</span>
                                        <span className="song-description">Lorem ipsum dolor sit amet </span>
                                    </div>
                                    <div className="Heart--">
                                        <label className='Like' ></label>
                                        <button className="Button-Like" />
                                    </div>
                                </li>
                            </ul>
                        </div>    
                    </nav> */}
                </div>
            </aside>
            
        </nav>
    )
}
export default Nav