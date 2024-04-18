// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import logo from "./logo.svg";
import evesangrolang from "./evesangrolang.jpg";
import artwork from "./artwork.jpg";
import artwork2 from "./artwork2.jpg";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="header1">
          CHA WON <br />
          PARTY
        </h1>
        <div className="left">
          <div className="left-text1">DIMENSIONFASIONSOCIALDIMENSIONFASIONSOCIALDIMENSION</div>
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

export default App;
