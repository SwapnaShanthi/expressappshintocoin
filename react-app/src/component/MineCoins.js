import React, { Component } from 'react';
import '../style/shintocoin.css'

class MineCoins extends Component {
  constructor(props){
    super(props);
    this.state={answer:"",
                miningquestion:[{question:"What is the 6th fibonacci number",
                                 answer:5}],
                currentquestion:"",
                error:""            
               }
  }             
 
   handleChange=(e)=>{
   
       this.setState({[e.target.name]:parseInt(e.target.value)});
       if(e.target.name==="answer" && e.target.value===""){
         console.log("hi");
        }
        this.setState({error:""});
 

   }
   handleSubmit=(event)=>{
     event.preventDefault();
     if(this.state.miningquestion[0].answer === this.state.answer){
         this.props.addTransactionToLedger({action:"Mine",amount:1,value:""});
     }else{
          this.setState({error:"Wrong answer please try again."})
     }
     this.setState({answer:""});
     this.setState({error:""});
 
   }
   

  render() {
    const displayButton=()=>{

      if(this.state.answer===""){
          return <input className="disable" type="submit" value="Mine" />
      }else{
          return <input className="buttonstyle" type="submit" value="Mine"/>
      }
     } 
     const displayError=()=>{
      if( this.state.error!==""){
         return <div className="errormessage">{this.state.error}</div>
      }

     }
    return (
      <div className="outerformdiv"> 
       <h1>Mine ShintoCoins</h1>
       <p>Here you can mine ShintoCoins by being the first one to solve the algorithm:</p>
       <p>{this.state.miningquestion[0].question}</p>
      
       <div className="formdiv">
          <form onSubmit={this.handleSubmit}>
            <input className="inputsyle" type="number" name="answer" onChange={this.handleChange} value={this.state.answer}/>
            {displayButton()}
            {displayError()}
          </form>
       </div>
      </div>
    );
  }
}

export default MineCoins;