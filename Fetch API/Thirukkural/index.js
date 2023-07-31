// Thirukkural API
let thirukkural = document.getElementById('button')
var thirukkural_url = "https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json"

async function thirukkural_fetching(){
    try{
        var url_fetch=await fetch(thirukkural_url)
        method:"GET"
    var res= await url_fetch.json()
     console.log(res);
   
    }
    catch(err){
        console.log(err);
        }   
}
thirukkural_fetching();