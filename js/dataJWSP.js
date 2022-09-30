
let lista1 = document.getElementById('lista')

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {

        data.forEach((post) => {
            let li = document.createElement("li")
            li.innerHTML = `
                <h1>Usuario : ${post.userId}<p>
                <h2> ID :  ${post.id}
                <h2> Title : ${post.title}   
                <h2> Texto : ${post.body}
                `
        lista1.append(li)})
    })
