(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},32:function(e,t,a){e.exports=a(67)},37:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),s=a.n(r),i=(a(37),a(2)),l=a(3),c=a(5),u=a(4),m=a(6),d=(a(38),a(39),a(12)),h=a(11),v=(a(13),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"homeouterdiv"},o.a.createElement("h1",null,"ShintoCoin"),o.a.createElement("p",null," Welcome to ShintoCoins, ShintoCoins are coins made by solving algorithms! To get started head over to Mine Coins' and get to work! "))}}]),t}(n.Component)),p=a(14),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(p.a)({},e.target.name,parseInt(e.target.value))),"answer"===e.target.name&&""===e.target.value&&console.log("hi"),a.setState({error:""})},a.handleSubmit=function(e){e.preventDefault(),a.state.miningquestion[0].answer===a.state.answer?a.props.addTransactionToLedger({action:"Mine",amount:1,value:""}):a.setState({error:"Wrong answer please try again."}),a.setState({answer:""}),a.setState({error:""})},a.state={answer:"",miningquestion:[{question:"What is the 6th fibonacci number",answer:5}],currentquestion:"",error:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"outerformdiv"},o.a.createElement("h1",null,"Mine ShintoCoins"),o.a.createElement("p",null,"Here you can mine ShintoCoins by being the first one to solve the algorithm:"),o.a.createElement("p",null,this.state.miningquestion[0].question),o.a.createElement("div",{className:"formdiv"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{className:"inputsyle",type:"number",name:"answer",onChange:this.handleChange,value:this.state.answer}),""===e.state.answer?o.a.createElement("input",{className:"disable",type:"submit",value:"Mine"}):o.a.createElement("input",{className:"buttonstyle",type:"submit",value:"Mine"}),function(){if(""!==e.state.error)return o.a.createElement("div",{className:"errormessage"},e.state.error)}())))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(p.a)({},e.target.name,parseInt(e.target.value))),"coinsbought"===e.target.name&&""===e.target.value&&console.log("hi"),a.setState({error:""})},a.handleSubmit=function(e){if(e.preventDefault(),0!==a.state.coinsbought){var t=a.props.coinvalue;t+=a.state.coinsbought,a.props.addTransactionToLedger({action:"Buy",amount:a.state.coinsbought,value:t})}else a.setState({error:"Wrong answer please try again."});a.setState({coinsbought:""})},a.state={coinsbought:"",error:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state.coinsbought);return o.a.createElement("div",{className:"outerformdiv"},o.a.createElement("h1",null,"Buy ShintoCoins"),o.a.createElement("p",null,"Current ShintoCoin Value  : ",this.props.coinvalue),o.a.createElement("p",null,"No of ShintoCoins owned   : ",this.props.totalcoins),o.a.createElement("div",{className:"formdiv"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{className:"inputsyle",type:"number",name:"coinsbought",onChange:this.handleChange,value:this.state.coinsbought}),""===e.state.coinsbought?o.a.createElement("input",{className:"disable",type:"submit",value:"Buy"}):o.a.createElement("input",{className:"buttonstyle",type:"submit",value:"Buy"}),function(){if(""!==e.state.error)return o.a.createElement("div",null,e.state.error)}())))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(p.a)({},e.target.name,parseInt(e.target.value))),"coinsbought"===e.target.name&&""===e.target.value&&console.log("hi"),a.setState({error:""})},a.handleSubmit=function(e){if(e.preventDefault(),console.log("coin",a.props.totalcoins-a.state.coinssold),a.props.totalcoins-a.state.coinssold>=0){if(0!==a.state.coinssold&&a.props.coinvalue>=1&&a.props.totalcoins>0){var t=a.props.coinvalue;a.props.coinvalue>1&&(t-=a.state.coinssold)<=0&&(t=1),a.props.addTransactionToLedger({action:"Sell",amount:a.state.coinssold,value:t})}else a.setState({error:"Your coins don't have enough value to sell."});a.setState({coinsbought:""})}else a.setState({error:"You don't have enough coins to sell"})},a.state={coinssold:"",error:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state.coinssold);return o.a.createElement("div",{className:"outerformdiv"},o.a.createElement("h1",null,"Sell ShintoCoins"),o.a.createElement("p",null,"Current ShintoCoin Value  : ",this.props.coinvalue),o.a.createElement("p",null,"No of ShintoCoins owned   : ",this.props.totalcoins),o.a.createElement("div",{className:"formdiv"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{className:"inputsyle",type:"number",name:"coinssold",onChange:this.handleChange,value:this.state.coinssold}),""===e.state.coinssold?o.a.createElement("input",{className:"disable",type:"submit",value:"Sell"}):o.a.createElement("input",{className:"buttonstyle",type:"submit",value:"Sell"}),function(){if(""!==e.state.error)return o.a.createElement("div",{className:"errormessage"},e.state.error)}())))}}]),t}(n.Component),E=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getTransactionLedger()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"outerformdiv"},o.a.createElement("h1",null,"Ledger Transaction Details"),o.a.createElement("div",{className:"ledgerinnerdiv"},"Detailed view of Transaction from ledger"),e.props.transactionledger.map(function(t,a){var n="";if(t.id===e.props.match.params.id)return"Buy"===t.transaction.action?n="Bought":"Sell"===t.transaction.action?n="Sold":"Mine"===t.transaction.action&&(n="Mined"),o.a.createElement("div",null,o.a.createElement("span",null,"Transaction #",t.id," "),o.a.createElement("p",null,o.a.createElement("span",{className:"spanbold"},n),o.a.createElement("span",{className:"spanledgerdetails"},t.transaction.amount," ShintoCoins")))}))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={transactionledger:[],error:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"outerformdiv"},o.a.createElement("h1",null,"Brows Ledger"),o.a.createElement("p",null,"Here you can browse all ShintoCoin transactions"),o.a.createElement("div",{className:"itemouterdiv"},o.a.createElement("div",{className:"ledgerheader"},"ShintoCoin Ledger"),o.a.createElement("div",{className:"itemheaderstyle"},o.a.createElement("span",{className:"itemstyle"},"Action"),o.a.createElement("span",{className:"itemstyle"},"Amount"),o.a.createElement("span",{className:"itemstyle"},"Value")),e.props.transactionledger.map(function(e,t){return o.a.createElement("div",{className:"itemheaderstyle"},o.a.createElement("span",{className:"itemstyle"},e.transaction.action),o.a.createElement("span",{className:"itemstyle"},e.transaction.amount),o.a.createElement("span",{className:"itemstyle"},e.transaction.value),o.a.createElement("span",{className:"itemstyle"},o.a.createElement(d.b,{to:"/ledgerdetails/".concat(e.id)},"Details")))})))}}]),t}(n.Component),y=a(16),N=a.n(y),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).addTransactionToLedger=function(e){if("Mine"===e.action){e.value=a.state.coinvalue;var t=a.state.totalcoins;t+=1,a.setState({totalcoins:t}),a.setState({coinvalue:e.value})}else if("Buy"===e.action){var n=a.state.totalcoins;n+=e.amount,a.setState({totalcoins:n}),a.setState({coinvalue:e.value})}else if("Sell"===e.action){var o=a.state.totalcoins;o-=e.amount,a.setState({totalcoins:o}),a.setState({coinvalue:e.value})}a.setState({transactions:e}),console.log("coins",a.state.totalcoins),console.log("ledger",e),a.enterTransaction(e)},a.enterTransaction=function(e){N.a.post("http://localhost:5000/entertransaction/",{transaction:e}).then(function(e){var t=e.data.bankdetails;console.log("posted a the transaction",e.data.bankdetails),a.setState({coinvalue:t.coinvalue}),a.setState({totalcoins:t.totalcoins})}).catch(function(e){a.setState({error:"Server connection failed"})})},a.getBankDetails=function(){N.a.get("http://localhost:5000/getbankdetails/").then(function(e){var t=e.data.data[e.data.data.length-1];console.log("got the response from shinto bank",e.data.data[e.data.data.length-1]),a.setState({coinvalue:t.coinvalue}),a.setState({totalcoins:t.totalcoins})}).catch(function(e){a.setState({error:"Server connection failed"})})},a.getTransactionLedger=function(){N.a.get("http://localhost:5000/gettransactionedger/").then(function(e){e.data;console.log("got the response from shinto bank",e.data),a.setState({transactionledger:e.data.data})}).catch(function(e){a.setState({error:"Server connection failed"})})},a.state={transactions:[],coinvalue:1,totalcoins:0,transactionledger:[{id:"1",transaction:{action:"Mine",amount:1,value:1}},{id:"2",transaction:{action:"Buy",amount:5,value:6}},{id:"3",transaction:{action:"Mine",amount:1,value:6}},{id:"4",transaction:{action:"Buy",amount:5,value:11}}]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getBankDetails()}},{key:"render",value:function(){var e=this;return console.log("posted a the transaction1",this.state.totalcoins),console.log("posted a the transaction2",this.state.coinvalue),o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement("div",{className:"naviouterdiv"},o.a.createElement("div",{className:"logostyle"}),o.a.createElement("div",{className:"navibarstyle"},o.a.createElement(d.b,{to:"/home"},"Home")),o.a.createElement("div",{className:"navibarstyle"},o.a.createElement(d.b,{to:"/minecoins"},"Mine Coins")),o.a.createElement("div",{className:"navibarstyle"},o.a.createElement(d.b,{to:"/buycoins"},"Buy Coins")),o.a.createElement("div",{className:"navibarstyle"},o.a.createElement(d.b,{to:"/sellcoins"},"Sell Coins")),o.a.createElement("div",{className:"navibarstyle"},o.a.createElement(d.b,{onClick:this.getTransactionLedger,to:"/browseledger"},"Browse Ledger"))),o.a.createElement("div",{className:"routerdiv"},o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/",render:function(){return o.a.createElement(h.a,{to:"/home"})}}),o.a.createElement(h.b,{path:"/home",component:v}),o.a.createElement(h.b,{path:"/minecoins",render:function(){return o.a.createElement(g,{addTransactionToLedger:e.addTransactionToLedger})}}),o.a.createElement(h.b,{path:"/buycoins",render:function(){return o.a.createElement(b,{addTransactionToLedger:e.addTransactionToLedger,totalcoins:e.state.totalcoins,coinvalue:e.state.coinvalue})}}),o.a.createElement(h.b,{path:"/sellcoins",render:function(){return o.a.createElement(f,{addTransactionToLedger:e.addTransactionToLedger,totalcoins:e.state.totalcoins,coinvalue:e.state.coinvalue})}}),o.a.createElement(h.b,{path:"/browseledger",render:function(){return o.a.createElement(S,{getTransactionLedger:e.getTransactionLedger,transactionledger:e.state.transactionledger})}}),o.a.createElement(h.b,{path:"/ledgerdetails/:id",render:function(t){return o.a.createElement(E,Object.assign({},t,{getTransactionLedger:e.getTransactionLedger,transactionledger:e.state.transactionledger}))}})))))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.ee75771d.chunk.js.map