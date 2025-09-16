// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import Card from './Components/Card'
import Category from './Components/Category'
import Food from './Components/Food'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Food />
      <Category />
    </>
  )
}

export default App