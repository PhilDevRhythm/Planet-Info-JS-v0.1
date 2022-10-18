function showStarInfo(star) {
    
    let apiNasaURL = 'https://images-api.nasa.gov/search?q=' + star
    const starData = document.getElementById("showStellarInfo")
    var randomNumber1 = Math.floor(Math.random()*10)
    var randomNumber2 = Math.floor(Math.random()*10)
    var randomNumber3 = Math.floor(Math.random()*10)
    const fixedNumber1 = randomNumber1
    const fixedNumber2 = randomNumber2
    const fixedNumber3 = randomNumber3
    console.log(apiNasaURL);
    fetch(apiNasaURL)
        .then((response) => response.json(), console.log("response ok"))
        .then((result) => {
            let res2 = result.collection.items[fixedNumber1].links[0].href
            let res3 = result.collection.items[fixedNumber2].links[0].href
            let res4 = result.collection.items[fixedNumber3].links[0].href
            let resText2 = result.collection.items[fixedNumber1].data[0].description_508
            let resText3 = result.collection.items[fixedNumber2].data[0].description_508
            let resText4 = result.collection.items[fixedNumber3].data[0].description_508
            if (resText2 === undefined) {
                resText2 = result.collection.items[fixedNumber1].data[0].description
            } else if (resText3 === undefined) {
                resText3 = result.collection.items[fixedNumber2].data[0].description
            } else if (resText4 === undefined) {
                resText4 = result.collection.items[fixedNumber3].data[0].description
            } else { }

            let col1 = document.getElementById("showExtraData2")
            col1.innerHTML = `
            <br>
                        <div class="row"><br><br>
                        <br>         
                            <div class="col mb-4 text-bg-dark extra-pics">
                              <img src="${res2}" style="width:100%;max-width:300px" class="p-3 imageOfTheDay card-img-top img-fluid rounded-start text-bg-dark"></img>
                              <br>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resText2}</p>
                                <a href="#" id="botonMasInfo1" class="btn btn-info">View</a>
                               </div>
                            </div>
                            <br>
                            <div class="col mb-4 text-bg-dark extra-pics">
                            <img src="${res3}" id="extraPics" style="width:100%;max-width:300px" class="p-3 card-img-top imageOfTheDay img-fluid rounded-start text-bg-dark"></img>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resText3}</p>
                                <a href="#" id="botonMasInfo2" class="btn btn-info">View</a>
                                </div>    
                            </div>
                            <br>
                            <div class="col mb-4 text-bg-dark extra-pics">
                            <img src="${res4}" id="extraPics" style="width:100%;max-width:300px" class="p-3 card-img-top imageOfTheDay img-fluid rounded-start"></img>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resText4}</p>
                                <a href="#" id="botonMasInfo3" class="btn btn-info">View</a>
            `
        })
}

let btnStar1 = document.getElementById("alpha-centauri")
let btnStar2 = document.getElementById("sirius")
let btnStar3 = document.getElementById("betelgeuse")
let btnStar4 = document.getElementById("procyon")
let btnStar5 = document.getElementById("barnard")
btnStar1.onclick = () => { showStarInfo("alpha-centauri"),event.preventDefault()}
btnStar2.onclick = () => { showStarInfo("sirius"),event.preventDefault()}
btnStar3.onclick = () => { showStarInfo("betelgeuse"),event.preventDefault()}
btnStar4.onclick = () => { showStarInfo("procyon"),event.preventDefault()}
btnStar5.onclick = () => { showStarInfo("barnard"),event.preventDefault()}
