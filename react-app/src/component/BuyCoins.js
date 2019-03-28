import React, { Component } from 'react';
import '../style/shintocoin.css'

class BuyCoins extends Component {
  constructor(props){
    super(props);
    this.state={
                coinsbought:"",
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
     if(this.state.coinsbought !== 0){
          let coinvalue=this.props.coinvalue;
          coinvalue=coinvalue+this.state.coinsbought;
          this.props.addTransactionToLedger({action:"Buy",amount:this.state.coinsbought,value:coinvalue});
     }else{
          this.setState({error:"Wrong answer please try again."})
     }
     this.setState({coinsbought:""});
 
   }


  render() {
    console.log(this.state.coinsbought);
    const displayButton=()=>{

      if(this.state.coinsbought===""){
          return <input className="disable" type="submit" value="Buy" />
      }else{
          return <input className="buttonstyle" type="submit" value="Buy"/>
      }
     } 
     const displayError=()=>{
      if( this.state.error!==""){
         return <div>{this.state.error}</div>
      }

     }
    return (
      <div className="outerformdiv"> 
       <h1>Buy ShintoCoins</h1>
       <p>Current ShintoCoin Value  : {this.props.coinvalue}</p>
       <p>No of ShintoCoins owned   : {this.props.totalcoins}</p>
      
       <div className="formdiv">
          <form onSubmit={this.handleSubmit}>
            <input className="inputsyle" type="number" name="coinsbought" onChange={this.handleChange} value={this.state.coinsbought}/>
            {displayButton()}
            {displayError()}
          </form>
       </div>
      </div>
    );
  }
}

export default BuyCoins;