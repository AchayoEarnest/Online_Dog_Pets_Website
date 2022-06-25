//This variables will be used to add customer contents to the Reviews section
const textbox = document.getElementById('textbox');
const namebox = document.getElementById('namebox');
const button = document.getElementById('submit-btn');
const message = document.getElementById('comment')



button.addEventListener('click', displayReview);

//This function will add comments at the top of the messagebox
function displayReview(){
  const newReview = document.createElement("h3");
  newReview.textContent = namebox.value;
  message.appendChild(newReview);
  namebox.value = "";

  const newComment =document.createElement("p");
  newComment.textContent = textbox.value;
  message.appendChild(newComment);
  textbox.value = "";
}