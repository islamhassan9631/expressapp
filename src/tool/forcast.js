const request =require('request')
const forcast=(latitiude,longtitiude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=d19481cd4a9e07a45aa26b47509dc40b&query="+latitiude+","+longtitiude
    request({url,json:true},(error,response)=>{
           if(error){
               callback('no',undefined)
           }
            else if(response.body.error){
               callback('error',undefined)
           }
        else{
                  callback(undefined,response.body.current.weather_descriptions[0] + 'it is now' + response.body.current.temperature,response.body.current.Location)
             }
          
            
         })
}
module.exports =forcast