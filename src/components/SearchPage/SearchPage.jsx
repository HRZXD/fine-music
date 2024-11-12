import React, { useState } from "react";
import "./searchpage.css";
import Nav from "../Nav/Nav";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFound1, setIsFound1] = useState(false);
  const [isFound2, setIsFound2] = useState(false);
  const [isFound3, setIsFound3] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh

    if (searchTerm === "ก็คงต้องยอมจำนนกับคนไม่มีใจ") {
      setIsFound1(true);
    }
    if (
      searchTerm === "เธอคงเป็น VVS ตำหนิเธอ very very small very very small"
    ) {
      setIsFound2(true);
    }
    if (searchTerm === "ฉันฟัง Illslick เธอคงฟัง Travis Scott") {
      setIsFound3(true);
    }
  };

  return (
    <>
      <Nav />
      <header className="Main">
        {isFound1 ? (
          <div className="Music-Data">
          <div className="Music-Box">
            <div className="Music-Seacrh">
              <div className="Head-Music">
                <a href="#">จำนน</a>
              </div>
              <div className="Heart">
                <button className="Like-Heart">❤</button>
              </div>
              <div className="Img">
                  <img
                      src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*mMeo7iOsEkIrsak7"
                      alt="Music-Thumbnail"
                      className="Music-Thumbnail"  style={{width: "150px", height: "150px"}}
                    />
              </div>
              <div className="lyric">
                <span>
                ก็คงต้องยอมจำนนกับคนไม่มีใจ ยอมจำลา แม้ว่ารักสักเท่าไหร่
                    ไม่จำเป็นว่ารักฉันแค่ไหน (มากมาย) แค่เธอไม่ได้รักก็แค่นั้น
                    ยอมจำใจเอ่ยคำว่าลาก่อน ใจจำยอมรับว่าเธอนั้นต้องไป
                    กับความจริงว่าฉันมันไม่ใช่ แค่ต้องจำเอาไว้ เธอไม่รักกัน
                </span>
              </div>
            </div>
            </div>
          </div>
        ) : isFound2 ? (
          <div className="Music-Data">
          <div className="Music-Box">
            <div className="Music-Seacrh">
              <div className="Head-Music">
                <a href="#">Very Very Small</a>
              </div>
              <div className="Heart">
                <button className="Like-Heart">❤</button>
              </div>
              <div className="Img">
                  <img
                      src="https://you2play.com/storage/580/TYY9FCHgYL6mL8IuxeB0.webp"
                      alt="Music-Thumbnail"
                      className="Music-Thumbnail"  style={{width: "150px", height: "150px"}}
                    />
              </div>
              <div className="lyric">
                <span>
                เคยยืนรอเธอบน BTS ฉันไม่ได้คิดเรื่อง sex
                    แค่เดินเข้าโรงเรียนด้วยกัน และถ้าให้เปรียบเธอเป็นดั่งเพชร
                    เธอคงเป็น VVS ตำหนิเธอ very very small very very small Your
                    skin shrines bright like a white gold เธอดูเหมือนดารา In the
                    night show แต่ผมดูเหมือนกะอันธพาลที่อยู่ใน high & low But
                    hello girl
                </span>
              </div>
            </div>
            </div>
          </div>
        ) : isFound3 ? (
          <div className="Music-Data">
          <div className="Music-Box">
            <div className="Music-Seacrh">
              <div className="Head-Music">
                <a href="#">เด็กอินเตอร์</a>
              </div>
              <div className="Heart">
                <button className="Like-Heart">❤</button>
              </div>
              <div className="Img">
                  <img
                      src="https://i.scdn.co/image/ab67616d0000b27393ad90b97deda6e1c3b83bc7"
                      alt="Music-Thumbnail"
                      className="Music-Thumbnail"  style={{width: "150px", height: "150px"}}
                    />
              </div>
              <div className="lyric">
                <span>
                ฉันฟัง Illslick เธอคงฟัง Travis Scott ฉันเสื้อปล่อยชาย
                    กระโปรงเธอลายสก๊อต เพื่อนเธอจิบไวน์ แต่เพื่อนผม high on
                    Procodyl syrup เธอชอบ speak English ฉันพูดได้แค่นิดนิด Want
                    you to be my bitch เธอเหมือนหลุดออกมาจาก Hollywood
                </span>
              </div>
            </div>
            </div>
          </div>
        ) : (
          <h2 style={{ display: "none" }}></h2>
        )}

        <div className="main-content">
          <form className="Search" onSubmit={handleSubmit}>
            <div className="SearchBars">
              <input
                type="text"
                placeholder="Lyrics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
      </header>
      <div className="Music-Data">
        <div className="Music-Box">
          <div className="Music-Seacrh">
            <div className="Head-Music">
              <a href="#">Music-Name</a>
            </div>
            <div className="Heart">
              <button className="Like-Heart">❤</button>
            </div>
            <div className="Img">
              <div className="Music-Thumnail"></div>
            </div>
            <div className="lyric">
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing,Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Officia alias
                laudantium recusandae asperiores dignissimos non inventore!
              </span>
            </div>
          </div>
          <div className="Music-Seacrh">
            <div className="Head-Music">
              <a href="#">Music-Name</a>
            </div>
            <div className="Heart">
              <button className="Like-Heart">❤</button>
            </div>
            <div className="Img">
              <div className="Music-Thumnail"></div>
            </div>
            <div className="lyric">
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing,Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Officia alias
                laudantium recusandae asperiores dignissimos non inventore!
              </span>
            </div>
          </div>
          <div className="Music-Seacrh">
            <div className="Head-Music">
              <a href="#">Music-Name</a>
            </div>
            <div className="Heart">
              <button className="Like-Heart">❤</button>
            </div>
            <div className="Img">
              <div className="Music-Thumnail"></div>
            </div>
            <div className="lyric">
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing,Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Officia alias
                laudantium recusandae asperiores dignissimos non inventore!
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer className="Footer">
        <div className="footer">
          <p>@FineMusicBy....</p>
        </div>
      </footer>
    </>
  );
}

export default SearchPage;
