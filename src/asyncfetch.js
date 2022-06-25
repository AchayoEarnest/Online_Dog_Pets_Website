

async function loadDogs(){
   return(await fetch("../db.json")).json()
}
document.addEventListener("DOMContentLoaded", async()=>{
    let dogs = [];
    
    try {
        dogs = await loadDogs();
    }catch (e){
        console.log("Error!, please check below");
        console.log(e);
    }

    console.log(dogs)
});