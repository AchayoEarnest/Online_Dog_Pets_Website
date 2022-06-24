document.addEventListener("DOMContentLoader", getText)
document.getElementById('submit-btn').addEventListener('click', ()=>{window.alert(`Thank you for your feedback We will post your comment after review!`)})


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

getText()
