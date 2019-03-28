import React, { Component } from 'react';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom"
import '../style/shintocoin.css'
import Home from './Home';
import MineCoins from './MineCoins';
import BuyCoins from './BuyCoins';
import SellCoins from './SellCoins';
import BrowseLedger from './BrowseLedger';
import axios from 'axios';
import LedgerDetails from './LedgerDetails';

class ShintoCoinApp extends Component {
  constructor(props){
      super(props);
      this.state={transactions:[],
                  coinvalue:1,
                  totalcoins:0,
                //   transactionledger:[],
                  transactionledger:[{"id":"1","transaction":{"action":"Mine","amount":1,"value":1}},{"id":"2","transaction":{"action":"Buy","amount":5,"value":6}},{"id":"3","transaction":{"action":"Mine","amount":1,"value":6}},{"id":"4","transaction":{"action":"Buy","amount":5,"value":11}}]
                }
  }  
  addTransactionToLedger=(ledgerentry)=>{

      if(ledgerentry.action==="Mine"){

        ledgerentry.value=this.state.coinvalue;
        let temptotal=this.state.totalcoins;
        temptotal=temptotal+1;
        this.setState({totalcoins:temptotal});
        this.setState({coinvalue:ledgerentry.value});

       }else if(ledgerentry.action==="Buy"){
        
        let temptotal=this.state.totalcoins;
        temptotal=temptotal+ledgerentry.amount;
        this.setState({totalcoins:temptotal})
        this.setState({coinvalue:ledgerentry.value});

       }else if(ledgerentry.action==="Sell"){

        let temptotal=this.state.totalcoins;
        temptotal=temptotal-ledgerentry.amount;
        this.setState({totalcoins:temptotal})
        this.setState({coinvalue:ledgerentry.value});
          
       }
        this.setState({transactions:ledgerentry});

        console.log("coins",this.state.totalcoins);
        console.log("ledger",ledgerentry);
        this.enterTransaction(ledgerentry);

  }
  enterTransaction=(transaction) =>{
    axios.post(`http://localhost:5000/entertransaction/`,{transaction})
         .then((response) => {
               let bankdetails=response.data.bankdetails;
               console.log("posted a the transaction",response.data.bankdetails);
               this.setState({coinvalue:bankdetails.coinvalue});
               this.setState({totalcoins:bankdetails.totalcoins});
              
        })
        .catch((error) => {
            this.setState({error:"Server connection failed"});
        });
 }
 getBankDetails=()=>{
    axios.get(`http://localhost:5000/getbankdetails/`)
    .then((response )=> {
          let bankdetails=response.data.data[response.data.data.length-1];
          console.log("got the response from shinto bank",response.data.data[response.data.data.length-1]);
          this.setState({coinvalue:bankdetails.coinvalue});
          this.setState({totalcoins:bankdetails.totalcoins});
         
   })
   .catch((error) => {
       this.setState({error:"Server connection failed"});
   });

 }
 getTransactionLedger=()=>{
    axios.get(`http://localhost:5000/gettransactionedger/`)
    .then((response )=> {
          let ledger=response.data;
          console.log("got the response from shinto bank",response.data);
          this.setState({transactionledger:response.data.data});
         
   })
   .catch((error) => {
       this.setState({error:"Server connection failed"});
   });

 }
 componentDidMount(){
     this.getBankDetails();
 }

  render() {
    console.log("posted a the transaction1",this.state.totalcoins);
    console.log("posted a the transaction2",this.state.coinvalue);
    return (
      <div> 
       <BrowserRouter>
          <div className="naviouterdiv">
                <div className="logostyle"></div>
                <div className="navibarstyle" ><Link to="/home">Home</Link></div>
                <div className="navibarstyle" ><Link to="/minecoins">Mine Coins</Link></div>
                <div className="navibarstyle" ><Link to="/buycoins">Buy Coins</Link></div>
                <div className="navibarstyle" ><Link to="/sellcoins">Sell Coins</Link></div>
                <div className="navibarstyle" ><Link onClick={this.getTransactionLedger}to="/browseledger">Browse Ledger</Link></div>
           </div>  
            <div className="routerdiv">
               <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/home" />
                )} />
                
                    <Route path="/home" component={Home}/>
                    <Route path="/minecoins" render={() => { return <MineCoins addTransactionToLedger={this.addTransactionToLedger}/>;}}/>
                    <Route path="/buycoins"  render={() => { return <BuyCoins addTransactionToLedger={this.addTransactionToLedger} totalcoins={this.state.totalcoins} coinvalue={this.state.coinvalue}/>}}/>
                    <Route path="/sellcoins" render={() => { return <SellCoins addTransactionToLedger={this.addTransactionToLedger} totalcoins={this.state.totalcoins} coinvalue={this.state.coinvalue}/>}}/>
                    <Route path="/browseledger" render={() => { return <BrowseLedger getTransactionLedger={this.getTransactionLedger} transactionledger={this.state.transactionledger} />}}/>
                    <Route path="/ledgerdetails/:id" render={ (props) => { return <LedgerDetails {...props} getTransactionLedger={this.getTransactionLedger} transactionledger={this.state.transactionledger} /> }}/>
               
                </Switch>            
            </div>
         
       </BrowserRouter>
    
    
      </div>
    );
  }
}

export default ShintoCoinApp;