// NEWS SECTION

const imgPlace = document.getElementById("imgPlace")

// TODAY DATE VAR & URL

let date = new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let fullDateStart = `${year}-${month}-${day}`;
let fullDateEnd = `${year}-${month}-${day}`;
let fullDateURL = "https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=" + fullDateStart + "&end_date=" + fullDateEnd + "";


// API CALL
// ORIGINAL FETCH "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2022-07-08&end_date=2022-07-10"

fetch(fullDateURL)
    .then((response) => response.json())
    .then((result) => {
        result.forEach((observation) => {
            let li = document.getElementById("imgPlace")
            li.innerHTML = `
            <div class="text-center text-bg-dark">
                    <h1 class="display-4"> ${observation.title}</h1>      

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
                            <div class="card-text" id="showData1"><h5 class="lead"> ${observation.date}<h5></div>
                            <br>
                            <div class="card-text" id="showData2"><h4 class="lead"> ${observation.explanation}<h4></div>
                            <br>
                            <h5 class="lead"> Credits to : ${observation.copyright}<p>
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
        })
    })

let butYesterday = document.getElementById("yesterday")
butYesterday.onclick = () => {
    let fullDateStart = `${year}-${month}-${day-1}`;
    let fullDateEnd = `${year}-${month}-${day-1}`;
    let fullDateURL = "https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=" + fullDateStart + "&end_date=" + fullDateEnd + "";
    
    fetch(fullDateURL)
    .then((response) => response.json())
    .then((result) => {
        result.forEach((observation) => {
            let li = document.getElementById("imgPlace")
            li.innerHTML = `
            <div class="text-center text-bg-dark">
            <h1 class="display-4"> ${observation.title}</h1>     

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
                            <div class="card-text" id="showData1"><h5 class="lead"> ${observation.date}<h5></div>
                            <br>
                            <div class="card-text" id="showData2"><h4 class="lead"> ${observation.explanation}<h4></div>
                            <br>
                            <h5 class="lead"> Credits to : ${observation.copyright}<p>
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
        })
    })}

let butToday = document.getElementById("today")
butToday.onclick = () => {

    let fullDateStart = `${year}-${month}-${day}`;
    let fullDateEnd = `${year}-${month}-${day}`;
    let fullDateURL = "https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=" + fullDateStart + "&end_date=" + fullDateEnd + "";
    
    fetch(fullDateURL)
    .then((response) => response.json())
    .then((result) => {
        result.forEach((observation) => {
            let todayPic = document.getElementById("imgPlace")
            todayPic.innerHTML = `
            <div class="text-center text-bg-dark">
                    <h1 class="display-4"> ${observation.title}</h1>      

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
                            <div class="card-text" id="showData1"><h5 class="lead"> ${observation.date}<h5></div>
                            <br>
                            <div class="card-text" id="showData2"><h4 class="lead"> ${observation.explanation}<h4></div>
                            <br>
                            <h5 class="lead"> Credits to : ${observation.copyright}<p>
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
        })
    })}
    
let butBeforeYesterday = document.getElementById("yesterday-1")
butBeforeYesterday.onclick = () => {

    let fullDateStart = `${year}-${month}-${day-2}`;
    let fullDateEnd = `${year}-${month}-${day-2}`;
    let fullDateURL = "https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=" + fullDateStart + "&end_date=" + fullDateEnd + "";
    
    fetch(fullDateURL)
    .then((response) => response.json())
    .then((result) => {
        result.forEach((observation) => {
            let todayPic = document.getElementById("imgPlace")
            todayPic.innerHTML = `
            <div class="text-center text-bg-dark">
                    <h1 class="display-4"> ${observation.title}</h1>      

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
                            <div class="card-text" id="showData1"><h5 class="lead"> ${observation.date}<h5></div>
                            <br>
                            <div class="card-text" id="showData2"><h4 class="lead"> ${observation.explanation}<h4></div>
                            <br>
                            <h5 class="lead"> Credits to : ${observation.copyright}<p>
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
        })
    })}
    let butminus2Yesterday = document.getElementById("yesterday-2")
    butminus2Yesterday.onclick = () => {
    
    let fullDateStart = `${year}-${month}-${day-3}`;
    let fullDateEnd = `${year}-${month}-${day-3}`;
    let fullDateURL = "https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=" + fullDateStart + "&end_date=" + fullDateEnd + "";
    
    fetch(fullDateURL)
    .then((response) => response.json())
    .then((result) => {
        result.forEach((observation) => {
            let todayPic = document.getElementById("imgPlace")
            todayPic.innerHTML = `
            <div class="text-center text-bg-dark">
                    <h1 class="display-4"> ${observation.title}</h1>      

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
                            <div class="card-text" id="showData1"><h5 class="lead"> ${observation.date}<h5>
                            <br>
                            <div class="card-text" id="showData2"><h4 class="lead"> ${observation.explanation}<h4></div>
                            <h5 class="lead"> Credits to : ${observation.copyright}<p></div>
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
        })
    })}