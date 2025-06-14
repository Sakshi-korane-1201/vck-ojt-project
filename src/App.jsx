// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
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


import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AdmissionPage from './Pages/AdmissionPage'
import AboutPage from './Pages/AboutPage'
import CoursesPage from './Pages/CoursesPage'
import ContactPage from './Pages/ContactPage'


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path ="/HomePage" element={<HomePage/>}/>
        <Route path ="/AdmissionPage" element={<AdmissionPage/>}/>
        <Route path="/AboutPage" element={<AboutPage/>}/>
        <Route path="/CoursesPage" element={<CoursesPage/>}/>
        <Route path="/ContactPage" element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
};
export default App
