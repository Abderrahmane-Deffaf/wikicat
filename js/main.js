/* importing the api key  */
const cat_api = config.MY_KEY; 
/* returning the placeholder for the images */
const imagesPlaceHolder = document.querySelectorAll(".loadimages") ; 
console.log(imagesPlaceHolder) ; 
console.log(typeof(imagesPlaceHolder))
/* returning the name breed placeholder  */
const breedNamesPlaceholder = document.getElementsByClassName("breed-name") ; 
console.log(typeof(breedNamesPlaceholder)) ; 
console.log(breedNamesPlaceholder) ; 
//change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search?limit=7&has_breeds=1`;
const api_key = cat_api ; 

fetch(url,{headers: {
        'x-api-key': api_key
    }})
    .then((response) => {
    return response.json();
    })
    .then((data) => {
        console.log(data) ; 
        let imagesData = data;
        imagesData.forEach((element , index) => {
            console.log(element)
            console.log(index) ; 
                imagesPlaceHolder[index].src = element.url ; 
        });
        /* converting the breedNamesPlaceholder to an array */
        var breedNamesPlaceholderarr = Object.values(breedNamesPlaceholder) ; 
        breedNamesPlaceholderarr.forEach((element , index) => {
            console.log(element)
            console.log(index)
            console.log(imagesData[index].breeds[0].name)
            element.textContent = imagesData[index].breeds[0].name ; 
        })
    //imagesPlaceHolder[0].src = imagesData[0].url ; 
})
.catch(function(error) {
    console.log(error);
});