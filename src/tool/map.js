const request =require('request')
const mappp=(address,callback)=>{
    const id ="http://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoibW9oYW1tZWQyMDIzIiwiYSI6ImNremZiOG95dzBwa3Myb29jdWczZDhrOGIifQ.L5DFbjyzKqGoI773a82OdA&fbclid=IwAR39eta2UNQbYP7FT4NmtP90VuThgQ9yDT9xcvLEHzZPV3P_ZVFmoc9nqzU"

request({url: id,json:true},(error,response)=>{
    if(error){
       callback('notttt',undefined)
    }
    else if(response.body.message){
        callback(response.body.message);
    }
    else if(response.body. features.length == 0){
        callback("error");
    }

    else{
        callback(undefined,{
            latitude:response.body.features[0].center[0],
         longtitude:response.body.features[0].center[1],
         place:response.body.features[0].place_name,
        })
          

    }
  
    
})
}
module.exports =mappp
