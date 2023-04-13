
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


import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import logo from 'C:/PROJECT/fintake/src/images/logoimg.png'; 

function App() {
  return (
    <div className='trial'>
      <header className='App-header'> <img src={logo} alt="Fintake" className='logopic' /><button className='b1'>HOME</button>

      </header>
      <div classname='img' img src></div>
      <h1><center>SAVINGS ACCOUNT</center></h1>
      <div></div>
      <form className='formbox'>

        <center>
          <label> Name:
            <input type="text" />
          </label>
          

          <label>Customer ID:
            <input type="text" />
          </label>

          <label>Account No.:
            <input type="text" />
          </label>
       
          <label>IFSC Code:
            <input type="text" />
          </label>
          
          <label>Branch:
            <input type="text" />
          </label>
         
          <label>Mobile number:
            <input type="text" />
          </label>
         
          <label>Email:
            <input type="text" />
          </label>
      
          <label>Address:
            <input type="text" />
          </label>

        </center>

        <button>EDIT</button>
        <h6>.</h6>
    <h6>.</h6>
    <h6>.</h6>
    <h6>.</h6>
   
   

      </form>

      <transaction />
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


export default App;
