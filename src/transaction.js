import React from 'react';
import ReactDOM from 'react-dom/client';
import './transaction.css';
import logo from 'C:/PROJECT/fintake/src/images/logoimg.png'; 

function Transaction() {
  return (
    <div className='trial'>
    <header className='App-header'> <img src={logo} alt="Fintake" className='logopic' />
    <button className='b1'>HOME</button>

   </header>

    <h1><center>Transactions </center></h1>
    <br></br>

    <div className='submain'>
    <table className='submain2'>
    <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Balance</th>
        </tr>
        <tr>
          <td>12-04-2023</td>
          <td>Sent by Muskan</td>
          <td>+500</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>10-04-2023</td>
          <td>Mobile Recharge</td>
          <td>-500</td>
          <td>4500</td>
        </tr>
        <tr>
          <td>5-04-2023</td>
          <td>PG Rent</td>
          <td>-10000</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>1-04-2023</td>
          <td>Party</td>
          <td>-5000</td>
          <td>15000</td>
        </tr>
        <tr>
          <td>30-03-2023</td>
          <td>Stipend by Genpact</td>
          <td>+20000</td>
          <td>20000</td>
        </tr>
    </table>
    </div>
    <br></br>
    <p>Final Balance: 5000                </p>
    <h6>.</h6>
    <h6>.</h6>
    <h6>.</h6>
    <h6>.</h6>
    <h6>.</h6>
    <h6>.</h6>
    <h6>.</h6>
    
    
    
    </div>
  );
}
export default Transaction;
