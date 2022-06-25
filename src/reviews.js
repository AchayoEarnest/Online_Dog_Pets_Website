
//this event listener will activate DOM content loader to load getText function
document.addEventListener("DOMContentLoader", getText)

//The below code will respond when the user clicks submit button 
document.getElementById('submit-btn').addEventListener('click', ()=>{
  window.alert(`Thank you for your feedback We will post your comment after review!`)});

document.getElementById('submit-btn2').addEventListener('click', ()=>{
  window.alert(`Thank you for signing up for our page. Please stay tuned for email updates!`)});
  

//the code below will be activated once the DOMContentLoaded getText function activared
function getText(){
  fetch('comments.json')
  .then((res)=>(res.json()))
  .then((data)=>{
    let output = '<h2 style="color: white;">Customers Comments</h2>'
    data.forEach(function(comment){
      output += `
              <ul>
                <li><h4>${comment.name}<h4></li>
                <li style="marginBottom:5px;">${comment.review}</li>
              </ul>
      `;
    });
    document.getElementById('obutula').innerHTML = output;
    
  });  
}

getText();








