import React, { Component } from 'react';
import '../style/shintocoin.css'

class SellCoins extends Component {
  constructor(props){
    super(props);
    this.state={
                coinssold:"",
                error:""            
               }
  }             
 
   handleChange=(e)=>{
   
       this.setState({[e.target.name]:parseInt(e.target.value)});
       if(e.target.name==="coinsbought" && e.target.value===""){
         console.log("hi");
        }
        this.setState({error:""});
 

   }
   handleSubmit=(event)=>{
     event.preventDefault();
     console.log("coin",this.props.totalcoins-this.state.coinssold);
     if((this.props.totalcoins-this.state.coinssold)>=0){
        if(this.state.coinssold !== 0 && this.props.coinvalue>=1 && this.props.totalcoins>0 ){
              let coinvalue=this.props.coinvalue;
              if(this.props.coinvalue>1){
                coinvalue=coinvalue-this.state.coinssold;
                if(coinvalue<=0){
                  coinvalue=1;
                }
              }
              this.props.addTransactionToLedger({action:"Sell",amount:this.state.coinssold,value:coinvalue});
        }else{
              this.setState({error:"Your coins don't have enough value to sell."})
        }
        this.setState({coinsbought:""});
     }else{
       this.setState({error:"You don't have enough coins to sell"})
     }  
 
   }


  render() {
    console.log(this.state.coinssold);
    const displayButton=()=>{

      if(this.state.coinssold===""){
          return <input className="disable" type="submit" value="Sell" />
      }else{
          return <input className="buttonstyle" type="submit" value="Sell"/>
      }
     } 
     const displayError=()=>{
      if( this.state.error!==""){
         return <div className="errormessage">{this.state.error}</div>
      }

     }
    return (
      <div className="outerformdiv"> 
       <h1>Sell ShintoCoins</h1>
       <p>Current ShintoCoin Value  : {this.props.coinvalue}</p>
       <p>No of ShintoCoins owned   : {this.props.totalcoins}</p>
      
       <div className="formdiv">
          <form onSubmit={this.handleSubmit}>
            <input className="inputsyle" type="number" name="coinssold" onChange={this.handleChange} value={this.state.coinssold}/>
            {displayButton()}
            {displayError()}
          </form>
       </div>
      </div>
    );
  }
}

export default SellCoins;