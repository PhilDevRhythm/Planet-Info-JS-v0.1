// NEWS SECTION

const imgPlace = document.getElementById("imgPlace")

// TODAY DATE VAR & URL

let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDateStart = `${year}-${month}-${day}`;
let fullDateEnd = `${year}-${month}-${day}`;
let fullDateURL = "https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=" + fullDateStart + "&end_date=" + fullDateEnd + "";
let fullDateURLminus1 = "https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=" + fullDateStart + "&end_date=" + fullDateEnd + "";

// API CALL
// ORIGINAL FETCH "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2022-07-08&end_date=2022-07-10"

fetch(fullDateURL)
    .then((response) => response.json())
    .then((result) => {
        result.forEach((observation) => {
            let li = document.createElement("li.card.text-bg-dark")
            li.innerHTML = `
            <div class="text-center text-bg-dark">
                    <h1> ${observation.title}</h1>      

                </div>
            <div class="mb-3 text-center" style="display: flex;justify-content: center; max-width:80%;align-items: center">
                <div class="row text-bg-dark">
                    <div class="col-md-2"></div>
                    <div class="col-md-5">
                        <div class="img-fluid rounded-start">
                            <br>
                            <img src=${observation.hdurl} class="imageOfTheDay"></img>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="card-body text-center">
                            <h5 class="card-title"></h5>
                            <div class="card-text" id="showData1"><h5> ${observation.date}<h5><h5> Credits to : ${observation.copyright}<p></div>
                            <br>
                            <div class="card-text" id="showData2"><h4> ${observation.explanation}<h4></div>
                            <br>
                            <div class="card-text" id="showData3"></div>
                            <div class="card-text" id="showData4"></div>
                        </div>
                    </div>
                </div>
            </div>
               <br>
                <hr></div>
                `
        imgPlace.append(li)
        })
    })

