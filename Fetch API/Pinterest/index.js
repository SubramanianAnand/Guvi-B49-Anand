// Pinterest API
let pinterest=document.getElementById('button')
var pinterest_url="https://developers.pinterest.com/"

async function pinterest_fetching(){
    try{
        var url_fetch=await fetch(pinterest_url)
        method:"GET"
    var res= await url_fetch.json()
     console.log(res);
   
    }
    catch(err){
        console.log(err);
        }   
}
pinterest_fetching()