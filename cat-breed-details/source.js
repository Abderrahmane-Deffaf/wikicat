/* selecting element of image breed representaion */
const imgRep = document.querySelector(".imgrep"); 
console.log(imgRep) ; 
/* set the image url */
const imgUrl = window.localStorage.getItem("img_url") ; 
console.log(imgUrl) ; 
imgRep.src= imgUrl ; 

/* selecting the breed-name holder  */
const breedName = document.querySelector(".breed-name") ;
console.log(breedName) ; 
/* set the breedName from the local storage */
breedName.textContent = window.localStorage.getItem("breedName") ; 