// NEWS SECTION

const imgPlace = document.getElementById("imgPlace")

// TODAY DATE VAR & URL

let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDateStart = `${year}-${month}-${day}`;
let fullDateEnd = `${year}-${month}-${day}`;
console.log(fullDateStart);
console.log(fullDateEnd);
let fullDateURL = "https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=" + fullDateStart + "&end_date=" + fullDateEnd + "";
console.log("paso");
console.log(fullDateURL);

// API CALL
// ORIGINAL FETCH "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2022-07-08&end_date=2022-07-10"

fetch(fullDateURL)
    .then((response) => response.json())
    .then((result) => {
        result.forEach((observation) => {
            let li = document.createElement("li.card.text-bg-dark")
            li.innerHTML = `
                <br>
                <div class="text-center text-bg-dark">
                    <br>
                    <h1> ${observation.title}</h1>               
                </div>
                <h1><br><img src=${observation.hdurl} class="imageOfTheDay"></img><br>
                <h5> ${observation.date} <p>
                <h4> ${observation.explanation} <p>
                
                <h5> Credits to : ${observation.copyright} <p>
                <br>
                <hr>
                `
        imgPlace.append(li)
        })
    })

