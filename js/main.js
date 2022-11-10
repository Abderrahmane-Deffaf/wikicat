/* importing the api key  */
const cat_api = config.MY_KEY; 


/* returning the placeholder for the images */
const imagesPlaceHolder = document.querySelectorAll(".loadimages") ; 


/* returning the name breed placeholder  */
const breedNamesPlaceholder = document.getElementsByClassName("breed-name") ; 



//change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search?limit=4&has_breeds=1`;
const api_key = cat_api ; 

fetch(url,{headers: {
        'x-api-key': api_key
    }})
    .then((response) => {
    return response.json();
    })
    .then((data) => {
        let imagesData = data;
        imagesData.forEach((element , index) => {
                imagesPlaceHolder[index].src = element.url ; 
        });
        /* converting the breedNamesPlaceholder to an array */
        var breedNamesPlaceholderarr = Object.values(breedNamesPlaceholder) ; 
        breedNamesPlaceholderarr.forEach((element , index) => {
            element.textContent = imagesData[index].breeds[0].name ; 
        })
    //imagesPlaceHolder[0].src = imagesData[0].url ; 
})
.catch(function(error) {
    console.log(error);
});

/* returing the breed links */
const breedLinks = document.querySelectorAll(".breed-links") ; 
console.log(breedLinks) ; 

console.log(breedLinks[1].previousElementSibling.src)
/* storing the name of the breed when he click on the links */
breedLinks.forEach((element) => {
    console.log(element.firstElementChild.textContent) ;
    element.addEventListener("click" , function() {
        var breed_name = element.firstElementChild.textContent ; 
        window.localStorage.setItem("breedName",breed_name) ; 
        var img_url = element.previousElementSibling.src ; 
        window.localStorage.setItem("img_url",img_url) ; 
    })
}) 
