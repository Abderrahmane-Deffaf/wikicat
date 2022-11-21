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

        /* storing the name of the breed when he click on the links */

        breedLinks.forEach((element, index) => {
            element.addEventListener("click", function () {
                window.localStorage.setItem("api_content", JSON.stringify(data[index])) ; 
            })
        }) 

})
.catch(function(error) {
    console.log(error);
});

window.onload = function() {
    window.localStorage.clear() ; 
}

/* working on the implentation of the search exemple */
const inputSearch = document.getElementById("search-input") ; 
console.log(inputSearch) ; 
const optgroup = document.querySelector(".opgroup") ; 
console.log(optgroup) ; 

cosl = function() {
    optgroup.style.width = inputSearch.clientWidth + "px"; 
}
setTimeout(cosl, 2000)
window.onresize = function() {
    optgroup.style.width = inputSearch.clientWidth + "px"; 
    console.log(optgroup.style.width)
    console.log(inputSearch.clientWidth) ; 
}
/* making the request for the 100 breed cat */
const url2 = `https://api.thecatapi.com/v1/images/search?limit=100&has_breeds=1`;

fetch(url2, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        var arrholder = [] ; 
        data.forEach((element) => {
            if(!arrholder.includes( element.breeds[0].name)) {
                arrholder.push(element.breeds[0].name); 
                let anchor = document.createElement("a");
                anchor.href = "/cat-breed-details/main.html";
                anchor.textContent = element.breeds[0].name;
                optgroup.appendChild(anchor); 
                anchor.addEventListener("click", function() {
                    window.localStorage.setItem("api_content", JSON.stringify(element)); 
                })
            }
        })
    })
    .catch(function (error) {
        console.log(error);
    });
inputSearch.addEventListener("focus" , function() {
    optgroup.style.display = "flex" ; 
})
inputSearch.addEventListener("blur" , function() {
    optgroup.style.display = "none" ; 
})