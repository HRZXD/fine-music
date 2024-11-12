import React, { useState } from "react";
import "./searchpage.css";
import Nav from "../Nav/Nav";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFound1, setIsFound1] = useState(false);
  const [isFound2, setIsFound2] = useState(false);
  const [isFound3, setIsFound3] = useState(false);
  const [isFound4, setIsFound4] = useState(false);
  const [isFound5, setIsFound5] = useState(false);
  const [isFound6, setIsFound6] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh

    if (searchTerm === "ก็คงต้องยอมจำนนกับคนไม่มีใจ") {
      setIsFound1(true);
    }
    if (
      searchTerm === "เธอคงเป็น VVS ตำหนิเธอ very very small very very small") {
      setIsFound2(true);
    }
    if (searchTerm === "ฉันฟัง Illslick เธอคงฟัง Travis Scott") {
      setIsFound3(true);
    }
    if (searchTerm === "หากฉันได้ขอสิ่งใดขอเธอกลับมาได้ไหม") {
      setIsFound4(true);
    }
    if (searchTerm === "if the world was ending i'd wanna be next to you"){
      setIsFound5(true);
    }
    if (searchTerm === "No one ever said it would be this hard"){
      setIsFound6(true);
    }
    
  };

  return (
    <>
      <Nav />
      <header className="Main">
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
        {/* data */}
        {isFound1 ? (
                    <div className="Music-Data">
                    <div className="Music-Box">
                      <div className="Music-Seacrh">
                        <div className="Head-Music">
                          <a href="#">จำนน - นน ธนนท์</a>
                        </div>
                        <div className="Heart">
                          <a className="Like-Heart" href="https://www.youtube.com/watch?v=l5ur0v0lyrs&pp=ygUM4LiI4Liz4LiZ4LiZ" target="_blank" rel="noopener noreferrer" >❤</a>
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
                          <a href="#">Very Very Small - ยังโอม</a>
                        </div>
                        <div className="Heart">
                          <a className="Like-Heart" href="https://www.youtube.com/watch?v=gVqPxHW9JQA&pp=ygUPdmVyeSB2ZXJ5IHNtYWxs" target="_blank" rel="noopener noreferrer" >❤</a>
                        </div>
                        <div className="Img">
                            <img
                                src="https://i.ytimg.com/vi/fInw31Xf488/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA_j5GD21i6Ed1YmqbyrVMq4-qbuQ"
                                alt="Music-Thumbnail"
                                className="Music-Thumbnail"  style={{width: "220px", height: "170px"}}
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
                          <a href="#">เด็กอินเตอร์-ยังโอม</a>
                        </div>
                        <div className="Heart">
                          <a className="Like-Heart" href="https://www.youtube.com/watch?v=XWllLAEHa3M&pp=ygUk4LmA4LiU4LmH4LiB4Lit4Li04LiZ4LmA4LiV4Lit4Lij4LmM" target="_blank" rel="noopener noreferrer" >❤</a>
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
                  ) : isFound4 ? (
                    <div className="Music-Data">
                    <div className="Music-Box">
                      <div className="Music-Seacrh">
                        <div className="Head-Music">
                          <a href="#">ปล่อยดาว-Yew</a>
                        </div>
                        <div className="Heart">
                          <a className="Like-Heart" href="https://www.youtube.com/watch?v=2fP6OLhBCSQ&pp=ygUZ4Lib4Lil4LmI4Lit4LiiIOC4lOC4suC4pw%3D%3D" target="_blank" rel="noopener noreferrer" >❤</a>
                        </div>
                        <div className="Img">
                            <img
                                src="https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fb5745b1f42881d8337712d906387191e.1000x1000x1.jpg"
                                alt="Music-Thumbnail"
                                className="Music-Thumbnail"  style={{width: "150px", height: "150px", }}
                                />
                        </div>
                        <div className="lyric">
                          <span>
                          หากฉันได้ขอสิ่งใดขอเธอกลับมาได้ไหมต้องมีชีวิตอีกไกลฉันอยู่คนเดียวไม่ไหว
                          เจ้าสายน้ำที่เย็นฉ่ำที่ทุกวันคอยอยู่ข้างกายตอนนี้เขาได้เป็นหาดทราย
                          ที่มันไม่เหลืออะไร
                          </span>
                        </div>
                      </div>
                      </div>
                    </div>
                  ) : isFound5 ? (<div className="Music-Data">
                    <div className="Music-Box">
                      <div className="Music-Seacrh">
                        <div className="Head-Music">
                          <a href="#">Die with a smile</a>
                        </div>
                        <div className="Heart">
                          <a className="Like-Heart" href="https://www.youtube.com/watch?v=kPa7bsKwL-c&pp=ygUQZGllIHdpdGggYSBzbWlsZQ%3D%3D" target="_blank" rel="noopener noreferrer" >❤</a>
                        </div>
                        <div className="Img">
                            <img
                                src="https://soundazed.s3.us-east-2.amazonaws.com/wp-content/uploads/2024/08/22235231/lady-gaga-bruno-mars-diewithasmile.jpg"
                                alt="Music-Thumbnail"
                                className="Music-Thumbnail"  style={{width: "150px", height: "150px", }}
                                />
                        </div>
                        <div className="lyric">
                          <span>
                            If the world was ending I’d wanna be next to you If the party was over 
                            And our time on Earth was through I’d wanna hold you just for a while
                            And die with a smile
                          </span>
                        </div>
                      </div>
                      </div>
                    </div>
                  ) : isFound6 ? (<div className="Music-Data">
                    <div className="Music-Box">
                      <div className="Music-Seacrh">
                        <div className="Head-Music">
                          <a href="#">Coldplay - The Scientist</a>
                        </div>
                        <div className="Heart">
                          <a className="Like-Heart" href="https://www.youtube.com/watch?v=RB-RcX5DS5A&pp=ygUYY29sZHBsYXkgLSB0aGUgc2NpZW50aXN0" target="_blank" rel="noopener noreferrer" >❤</a>
                        </div>
                        <div className="Img">
                            <img
                                src="https://i.ytimg.com/vi/RB-RcX5DS5A/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD0nTZqmAkvW8oGZnP_RfihhQMYAg"
                                alt="Music-Thumbnail"
                                className="Music-Thumbnail"  style={{width: "230px", height: "150px", }}
                                />
                        </div>
                        <div className="lyric">
                          <span>
                          It's such a shame for us to part Nobody said it was easy
                          No one ever said it would be this hard
                          Oh, take me back to the start
                          I was just guessing at numbers and figures
                          Pulling the puzzles apart
                          Questions of science, science and progress
                          </span>
                        </div>
                      </div>
                      </div>
                    </div>) : (<h2 style={{ display: "none" }}></h2>
                    )}
      </header>
      <footer className="Footer">
        <div className="footer">
          <p>@FineMusicBy....</p>
        </div>
      </footer>
    </>
  );
}

export default SearchPage;
