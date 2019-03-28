const express = require( 'express');
const app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const axios = require( 'axios');

app.use(express.static("./../react-app/build/")); 

app.get("/getbankdetails/",(request, response)=>{

    axios.get(`http://5c99215a423656001439321e.mockapi.io/api/v1/shintobank`)
         .then(function (mockApiBankGetResponse) {
                console.log("got from shintobank",mockApiBankGetResponse.data)
                        return response.json({
                                data: mockApiBankGetResponse.data,
                                status:true
                            })
                    
        })
        .catch(error => {
                console.log("get shintobank failed"+error);
        });
    

})
app.get("/gettransactionedger/",(request, response)=>{

    axios.get(`http://5c99215a423656001439321e.mockapi.io/api/v1/shintotransactionledger`)
         .then(function (mockApiledgerGetResponse) {
                console.log("got from shintobank",mockApiledgerGetResponse.data)
                        return response.json({
                                data: mockApiledgerGetResponse.data,
                                status:true
                            })
                    
        })
        .catch(error => {
                console.log("get transaction ledger failed"+error);
        });
    

})

   

app.post("/entertransaction/",(request, response)=>{
    console.log(request.body);
    axios.get(`http://5c99215a423656001439321e.mockapi.io/api/v1/shintobank`)
         .then(function (mockApiBankGetResponse) {
             console.log("get from shintobank",mockApiBankGetResponse.data[mockApiBankGetResponse.data.length-1])
             let transaction= request.body.transaction;
             let bankdetails=mockApiBankGetResponse.data[mockApiBankGetResponse.data.length-1];
             if(transaction.action==="Mine"){
                bankdetails.totalcoins=bankdetails.totalcoins+ transaction.amount;
                
             }else if(transaction.action==="Buy"){
                bankdetails.totalcoins=bankdetails.totalcoins+ transaction.amount;
               
                bankdetails.coinvalue= transaction.value;
                console.log("buy details",bankdetails);

             }else if(transaction.action==="Sell"){
                bankdetails.totalcoins=bankdetails.totalcoins- transaction.amount;
               
                bankdetails.coinvalue= transaction.value;
                console.log("sell details",bankdetails);

             }
             axios.post(`http://5c99215a423656001439321e.mockapi.io/api/v1/shintobank`,bankdetails)
                  .then((mockApibankPostResponse) => {
                        console.log("update shintobank",mockApibankPostResponse.data);
                
               
                        axios.post(`http://5c99215a423656001439321e.mockapi.io/api/v1/shintotransactionledger`,request.body)
                             .then((mockApiLedgerPostResponse) => {
                                
                                    console.log("posted to shintotransactionledger",mockApiLedgerPostResponse.data);
                                        return response.json({
                                            bankdetails:mockApibankPostResponse.data,
                                            status:true
                                        })
                             })
                             .catch((error )=> {
                                console.log("shintotransactionledger post failed"+error);
                             }); 
                    })
                    .catch((error) => {
                       console.log("shintobank post failed"+error);
                    });
               
                   
        })
        .catch((error) => {
            console.log("get from shintobank failed",error);
        });        
  

})        

app.listen(5000 ,()=>{

});