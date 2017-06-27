//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var nameElem = document.getElementsByClassName("name");

for(i=0; i<nameElem.length; i++){
nameElem[i].addEventListener("click", showMenu);
}

function showMenu(){
  var menuElem = this.querySelectorAll(".menu")[0];
  if(menuElem.style.display === "none"){
    menuElem.style.display = "block";
  }else{
    menuElem.style.display = "none";
  }
}
























