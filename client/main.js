

function myFunction() {
  var element = document.getElementById("snom");
  element.classList.toggle("grayscale");
  console.log('click');

  try {
    nonExistentFunction2();
  } catch (error) {
    rollbar.log('User Clicked');
   
  };
 
}

let snomclick = document.querySelector("#snom");
snomclick.addEventListener("click", myFunction);



console.log('YOURE DOING GREAT')



