function ToggleMenu() {
    
    var songContainer = document.getElementById("songContainer");
    if (songContainer.style.display === "none" || songContainer.style.display === "") {
        songContainer.style.display = "block"; // แสดง container เมื่อกดไอคอน
    } else {
        songContainer.style.display = "none"; // ซ่อน container เมื่อกดอีกครั้ง
    }

}
export default ToggleMenu;