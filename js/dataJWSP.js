
// let lista1 = document.getElementById('lista')

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => {

//         
//         })
//     }
// )
var myHeaders = new Headers();
myHeaders.append("X-API-KEY", "1837f472-eb44-42fe-9d3b-0722f31eaa7c");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://api.jwstapi.com/observation/jw02731002001_02107_00004_mirimage_o002?page=1&perPage=10", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    let lista1 = document.getElementById('lista')
    data.forEach((observation) => {

    let li = document.createElement("li")
    li.innerHTML = `
        <h1> Observation ID : ${observation.observation_id}<h1>
        <h2> JPG location :  ${observation.location}
        <h2> Program Number : ${observation.program}
        `
    lista1.append(li)
    }
    )


// key: 1837f472-eb44-42fe-9d3b-0722f31eaa7c
