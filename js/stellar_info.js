function showStarInfo(star,a) {

  let apiNasaURL = 'https://images-api.nasa.gov/search?q=star+' + star
  const starData = document.getElementById("showStellarInfo")


  // var randomNumber1 = Math.floor(Math.random() * 10)
  // var randomNumber2 = Math.floor(Math.random() * 10)
  // var randomNumber3 = Math.floor(Math.random() * 10)
  // const fixedNumber1 = randomNumber1
  // const fixedNumber2 = randomNumber2
  // const fixedNumber3 = randomNumber3



  fetch(apiNasaURL)
    .then((response) => response.json(), console.log("response ok"))
    .then((result) => {

      let resultImg = []

      resultImg.push = result.collection.items[0].links[0].href      
      resultImg.push = result.collection.items[1].links[0].href
      resultImg.push = result.collection.items[2].links[0].href
      resultImg.push = result.collection.items[3].links[0].href
      resultImg.push = result.collection.items[4].links[0].href
      resultImg.push = result.collection.items[5].links[0].href

      let resultText = []

      resultText.push = result.collection.items[0].data[0].description
      resultText.push = result.collection.items[1].data[0].description
      resultText.push = result.collection.items[2].data[0].description
      resultText.push = result.collection.items[3].data[0].description
      resultText.push = result.collection.items[4].data[0].description
      resultText.push = result.collection.items[5].data[0].description

      let resultTitle = []

      resultTitle.push = result.collection.items[0].data[0].title
      resultTitle.push = result.collection.items[1].data[0].title
      resultTitle.push = result.collection.items[2].data[0].title
      resultTitle.push = result.collection.items[3].data[0].title
      resultTitle.push = result.collection.items[4].data[0].title
      resultTitle.push = result.collection.items[5].data[0].title

      let resultNasaId = [];

      resultNasaId.push = result.collection.items[0].data[0].nasa_id
      resultNasaId.push = result.collection.items[1].data[0].nasa_id
      resultNasaId.push = result.collection.items[2].data[0].nasa_id
      resultNasaId.push = result.collection.items[3].data[0].nasa_id
      resultNasaId.push = result.collection.items[4].data[0].nasa_id
      resultNasaId.push = result.collection.items[5].data[0].nasa_id

      let resultDateCreated = []
      
      resultDateCreated.push = result.collection.items[0].data[0].date_created
      resultDateCreated.push = result.collection.items[1].data[0].date_created
      resultDateCreated.push = result.collection.items[2].data[0].date_created
      resultDateCreated.push = result.collection.items[3].data[0].date_created
      resultDateCreated.push = result.collection.items[4].data[0].date_created
      resultDateCreated.push = result.collection.items[5].data[0].date_created

      let resultKeywords = []

      resultKeywords.push = result.collection.items[0].data[0].keywords
      resultKeywords.push = result.collection.items[1].data[0].keywords
      resultKeywords.push = result.collection.items[2].data[0].keywords
      resultKeywords.push = result.collection.items[3].data[0].keywords
      resultKeywords.push = result.collection.items[4].data[0].keywords
      resultKeywords.push = result.collection.items[5].data[0].keywords
      
      let col1 = document.getElementById("showExtraData2")
      col1.innerHTML = `<div class="overlay text-bg-dark" id="overlay${a}" onclick="overlayOff()">
                        <div class="card text-bg-dark" style="width: 100%; height: 100%">
                          <img src="${resultImg[a]}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${resultTitle[a]}</h5>
                           <p class="card-text">${resultText[a]}</p>
                          </div>
                          <ul class="list-group list-group-flush">
                           <li class="list-group-item">NASA ID:${resultNasaId[a]}</li>
                            <li class="list-group-item">Created on: ${resultDateCreated[a]}</li>
                           <li class="list-group-item">Keywords: ${resultKeywords[a]}</li>
                          </ul>
                       </div></div>
                        <br>
            <div class="row"><br><br>
                        <br>         
                          <div class="col mb-4 text-bg-dark extra-pics">
                              <img src="${resultImg[a]}" style="width:100%;max-width:300px" class="p-3 imageOfTheDay card-img-top img-fluid rounded-start text-bg-dark"></img>
                              <br>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resultText[a]}</p>
                                <button type="button" class="btn btn-primary" onclick="overlayOn()">View</button>
                                
                                </div>                               
                               </div>
                            </div>
                            <br>
                            <div class="col mb-4 text-bg-dark extra-pics">
                            <img src="${resultImg[a]}" id="extraPics" style="width:100%;max-width:300px" class="p-3 card-img-top imageOfTheDay img-fluid rounded-start text-bg-dark"></img>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resultText[a]}</p>
                                <a href="#" id="botonMasInfo2" class="btn btn-info">View</a>
                                </div>    
                            </div>
                            <br>
                            <div class="col mb-4 text-bg-dark extra-pics">
                            <img src="${resultImg[a]}" id="extraPics" style="width:100%;max-width:300px" class="p-3 card-img-top imageOfTheDay img-fluid rounded-start"></img>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resultText[a]}</p>
                                <a href="#" id="botonMasInfo3" class="btn btn-info" >View</a>
                              </div>
                              </div>
                              </div>
            <hr>
            <div class="row"><br><br>
                        <br>         
                            <div class="col mb-4 text-bg-dark extra-pics">
                              <img src="${resultImg[a]}" style="width:100%;max-width:300px" class="p-3 imageOfTheDay card-img-top img-fluid rounded-start text-bg-dark"></img>
                              <br>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resultText[a]}</p>
                                <div class="popup btn btn-info" onclick="overlayOn()" >View</div>
                            </div>
                            </div>
                            <br>
                            <div class="col mb-4 text-bg-dark extra-pics">
                            <img src="${resultImg[a]}" id="extraPics" style="width:100%;max-width:300px" class="p-3 card-img-top imageOfTheDay img-fluid rounded-start text-bg-dark"></img>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resultText[a]}</p>
                                <a href="#" id="botonMasInfo5"  onclick="overlayOn()" class="btn btn-info">View</a>
                                </div>    
                            </div>
                            <br>
                            <div class="col mb-4 text-bg-dark extra-pics">
                            <img src="${resultImg[a]}" id="extraPics" style="width:100%;max-width:300px" class="p-3 card-img-top imageOfTheDay img-fluid rounded-start"></img>
                              <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">${resultText[a]}</p>
                                <a href="#" id="botonMasInfo6"  onclick="overlayOn()" class="btn btn-info">View</a>
                                </div>
                                </div>
                                </div>
            `
    })
}


function chooseStar(star,a) {
  let starInput = star
  switch (starInput) {
      case "wolf":
        showStarInfo("wolf",0)
          break;
      case "sirius":
        showStarInfo("sirius",1)
          break;
      case "betelgeuse":
        showStarInfo("betelgeuse",2)
          break;
      case "xxxxx":
        showStarInfo("testing",3)
          break;
      case "xxxxx":
        showStarInfo("testing",4)
          break;
      default:

  }
  return planet
}

let btnStar1 = document.getElementById("wolf")
let btnStar2 = document.getElementById("sirius")
let btnStar3 = document.getElementById("betelgeuse")
let btnStar4 = document.getElementById("procyon")
let btnStar5 = document.getElementById("barnard")
btnStar1.onclick = () => { showStarInfo("wolf",0), event.preventDefault() }
btnStar2.onclick = () => { showStarInfo("sirius",1), event.preventDefault() }
btnStar3.onclick = () => { showStarInfo("betelgeuse",2), event.preventDefault() }
btnStar4.onclick = () => { showStarInfo("procyon",3), event.preventDefault() }
btnStar5.onclick = () => { showStarInfo("barnard",4), event.preventDefault() }
