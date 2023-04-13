import React from 'react';
import ReactDOM from 'react-dom/client';
import './profile.css';
import logo from 'C:/PROJECT/fintake/src/images/logoimg.png'; 

function profile() {
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

export default profile;
