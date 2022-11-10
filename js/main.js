/* importing the api key  */
const cat_api = config.MY_KEY; 


/* returning the placeholder for the images */
const imagesPlaceHolder = document.querySelectorAll(".loadimages") ; 


/* returning the name breed placeholder  */
const breedNamesPlaceholder = document.getElementsByClassName("breed-name") ; 


/* returing the breed links */
const breedLinks = document.querySelectorAll(".breed-links"); 

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
        console.log(data) ; 
        imagesData.forEach((element , index) => {
                imagesPlaceHolder[index].src = element.url ; 
        });
        /* converting the breedNamesPlaceholder to an array */
        var breedNamesPlaceholderarr = Object.values(breedNamesPlaceholder) ; 
        breedNamesPlaceholderarr.forEach((element , index) => {
            element.textContent = imagesData[index].breeds[0].name ; 
        })
    //imagesPlaceHolder[0].src = imagesData[0].url ; 
        breedLinks.forEach((element, index) => {
            element.addEventListener("click", function () {
                window.localStorage.setItem("api_content", JSON.stringify(data[index])) ; 
            })
        }) 

})
.catch(function(error) {
    console.log(error);
});



/* storing the name of the breed when he click on the links */
