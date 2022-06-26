
//1 . this event listener will activate DOM content loader to load getText function
document.addEventListener("DOMContentLoader", getText)
  

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


//The below addEvent listener codes will respond when the user clicks submit button for posting reviews 
document.getElementById('submit-btn').addEventListener('click', ()=>{
  window.alert(`Thank you ${nameElem.value}!`)});


//this variables will help access the text input and post them back on top of the comment box
var messages = document.getElementById("comment");
var textbox = document.getElementById("textbox");
var button = document.getElementById("submit-btn");
var nameElem = document.getElementById("nametext");

// this code will add the h3 element containing the name of the person posting
button.addEventListener("click", function(){
    var name = document.createElement("h")
    name.innerHTML = nameElem.value;
    name.style.fontWeight = "bold";
    messages.appendChild(name);
    nameElem.value =""

// this code will add the parahgraph containing the message of the person posting
    var newMessage = document.createElement("p");
    newMessage.style.listStyle="none";
    newMessage.style.height = "auto";
    newMessage.innerHTML = textbox.value;
    newMessage.style.paddingBottom = "10px";
    messages.appendChild(newMessage);
    textbox.value = "";
});

//3. This codes responds to click events when someone signs up the page.
document.getElementById('submit-btn2').addEventListener('click', ()=>{
  window.alert(`Thank you for signing up for our page. Please stay tuned for email updates!`)});











