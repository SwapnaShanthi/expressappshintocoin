import React, { Component } from 'react';
import '../style/shintocoin.css';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";
import LedgerDetails from './LedgerDetails';

class BrowseLedger extends Component {
  constructor(props){
    super(props);
    this.state={
                transactionledger:[],
                error:""            
               }
  }  
 
  render() {
    
    const displayLedger=()=>{
       const transctionitems=this.props.transactionledger.map((items,index)=>{
       
         return (<div  className="itemheaderstyle">
                   <span className="itemstyle">{items.transaction.action}</span>
                   <span className="itemstyle">{items.transaction.amount}</span>
                   <span className="itemstyle">{items.transaction.value}</span>
                   <span className="itemstyle">
                    <Link to={`/ledgerdetails/${ items.id }`}>Details</Link>

                   </span>
                   </div>
                  )
                 

         })
      return transctionitems;
    }
  
    return (
      
      <div className="outerformdiv"> 
        <h1>Brows Ledger</h1>
        <p>Here you can browse all ShintoCoin transactions</p>
        <div className="itemouterdiv">
        <div className="ledgerheader">ShintoCoin Ledger</div>
        <div className="itemheaderstyle"><span className="itemstyle">Action</span><span className="itemstyle">Amount</span><span className="itemstyle">Value</span></div>
        
        
          {displayLedger()}
       
        </div>
      </div>
    );
  }
}

export default BrowseLedger;