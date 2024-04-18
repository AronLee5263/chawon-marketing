import evesangrolang from "./evesangrolang.jpg";
import artwork from "./artwork.jpg";
import artwork2 from "./artwork2.jpg";

import "./App.css";

function Temp() {
  return (
    <>
      <div className="container">
        <h1 className="header1">
          CHA WON <br />
          PARTY
        </h1>
        <div className="left">
          <div className="left-text1">DIMENSION</div>
          <div className="left-text2">FASION</div>
        </div>
        <div className="middle">
          {/* <img src={evesangrolang} className="evesangrolang" alt="backPoster" /> */}
          <img src={artwork2} className="artwork2" alt="artwork2" />

          {/* <div className="middle-text">CHA WON PARTY </div> */}
          <div className="middleLeft-text1"> Socialing </div>
          <div className="middleLeft-text2"> Team Game </div>
          <div className="middleLeft-text3"> Rounge Party </div>

          <div className="middleLeft-text4">Saturday 4.20 </div>

          <div className="middle-text2"> pm 7:00 - 10:00</div>
          <div className="middle-text3"> 신논현 역</div>
        </div>
        <div className="right">
          <div className="right-text1">SOCIAL</div>
        </div>
      </div>
    </>
  );
}

export default Temp;
