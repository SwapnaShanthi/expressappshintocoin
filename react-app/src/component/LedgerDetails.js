import React, { Component } from 'react';
import '../style/shintocoin.css'

class LedgerDetails extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.getTransactionLedger();
  }
  render() {
    const displayLedgerDetails=()=>{
      const transaction= this.props.transactionledger.map((item,index)=>{
        let action="";
        if(item.id ===this.props.match.params.id){
          if(item.transaction.action==="Buy"){
            action="Bought";
          }else if(item.transaction.action==="Sell"){
             action="Sold";
          }else if(item.transaction.action==="Mine"){
             action="Mined";
          }
          return (<div>
                      <span>Transaction #{item.id} </span>
                      <p>
                        <span className="spanbold">{action}</span>
                         <span className="spanledgerdetails">{item.transaction.amount} ShintoCoins</span>
                      </p>

                  </div>)
        }          

      })
      return transaction;
    }
    return (
      <div className="outerformdiv"> 
        <h1>Ledger Transaction Details</h1>
        <div className="ledgerinnerdiv">Detailed view of Transaction from ledger</div>
         {displayLedgerDetails()}
    
    
      </div>
    );
   }
}

export default LedgerDetails;