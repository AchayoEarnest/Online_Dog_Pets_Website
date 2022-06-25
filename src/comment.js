//This variables will be used to add customer contents to the Reviews section
const textbox = document.getElementById('textbox');
const namebox = document.getElementById('namebox');
const button = document.getElementById('submit-btn');
const message = document.getElementById('comment')



button.addEventListener('click', displayReview);


function displayReview(){
  const newReview = document.createElement("h3");
  newReview.innerText = namebox.value;
  message.appendChild(newReview);
  namebox.value = "";

  const newComment =document.createElement("p");
  newComment.innerHTML = textbox.value;
  message.appendChild(newComment);
  textbox.value = "";
}