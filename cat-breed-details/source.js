/* selecting element of image breed representaion */
const imgRep = document.querySelector(".imgrep"); 
console.log(imgRep) ; 


/* selecting the breed-name holder  */
const breedName = document.querySelector(".breed-name") ;
console.log(breedName) ; 


/* selecting the text description */
const description = document.querySelector(".breed-defenition") ; 
console.log(description) ; 
/* select the list items */
const listDescription = document.getElementsByTagName("li") ; 
console.log(listDescription) ; 
/* get the ranges ul */
const ranges = document.querySelectorAll(".rangeele") ; 
/* get the api equivuilant */
const api = JSON.parse(window.localStorage.getItem("api_content")) ; 
console.log(api) ; 
/* set the representation image */
imgRep.src = api.url ; 
/* set the breed name */
breedName.textContent = api.breeds[0].name ; 
/* set the description */
description.textContent = api.breeds[0].description ; 

/* set the listdescreption */
listDescription[0].firstElementChild.textContent = api.breeds[0].temperament;
listDescription[1].firstElementChild.textContent = api.breeds[0].origin;
listDescription[2].firstElementChild.textContent = api.breeds[0].life_span;
/* function that sets the ranges to diffrent color*/
var i = 0 , j = 0; 

function setrange(element  , count) { 
    for( ; i< count ; i++)  {
        element[i].style.background = "#4D270C" ; 
    }
    ++j ; 
    i = j*5 ; 
}
const arrOfcaracteristics = ['adaptability', 'affection_level', 'child_friendly', 'grooming', 'intelligence', 'health_issues', 'social_needs','stranger_friendly']
for(let e = 0 ; e<8 ; e++) {
    setrange(ranges, api.breeds[0][arrOfcaracteristics[e]]+i) ; 
}

/* selecting the images element to fill them*/
const otherimages = document.querySelectorAll(".otherimg") ;
/* set the id of the breed  */
var id = api.breeds[0].id ; 
/* make a request for the other images */
const cat_api = config.MY_KEY; 
const url = `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${id}`;
const api_key = cat_api;

fetch(url, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let imagesData = data;
        console.log(data);
        imagesData.forEach((element, index) => {
            otherimages[index].src = element.url;
        });
    })
    .catch(function (error) {
        console.log(error);
    });



