


function myFunction() {
  var element = document.getElementById("snom");
  element.classList.toggle("grayscale");
  console.log('click')
  rollbar.info("User clicked")
}

let snomclick = document.querySelector("#snom");
snomclick.addEventListener("click", myFunction);



console.log('YOURE DOING GREAT')

//live server and the way you have to write your srcs WILL SCREW THIS ENTIRE THING UP!!!!!

//FIXED !!!

// <!-- <script src="/js"></script> -->
// <script src="main.js"></script>

// </body>
// had to comment out the first script 
//and change the second script to main.js with no slash
//not sure if this will work when something is deployed but it works now!!!


