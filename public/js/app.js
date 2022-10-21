let form=document.getElementById("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    temperature()
})
let temperature =async()=>{
    try{
        const address=document.getElementById("address").value
        const res=await fetch('http://localhost:3000/weather?address='+address)
        const data=await res.json()
        console.log(data);
        if(data.error){
            document.getElementById("error").innerHTML=data.error
            document.getElementById("forcast").innerHTML=""
            document.getElementById("Location").innerHTML=""
        }
        else{
            document.getElementById("Location").innerHTML=data.Location
            document.getElementById("forcast").innerHTML=data.forcast
            document.getElementById("error").innerHTML=""
        }
    }
    catch(e){
console.log(e);
    }
}