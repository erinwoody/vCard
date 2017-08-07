var itemContainer = document.querySelector(".bodyContainer");

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/erinwoody");
req.addEventListener("load", reqListener);
req.send();

function reqListener() {
    let data = JSON.parse(this.responseText);


    itemContainer.innerHTML =

        `<section class="section">

        <div class="title">
            <h1>${data.name}</h1>
        </div>

        <div class="basics">
            <div class="container">
                <h2>The Basics</h2>
                <p><span class="greenFont">Name:</span> ${data.name}</p>
                <p><span class="greenFont">Github URL:</span> <a href=${data.html_url}>${data.login}</a></p>
                <p><span class="greenFont">Email:</span> ${data.email}</p>
                <p><span class="greenFont">Company:</span> ${data.company}</p>
                <p><span class="greenFont">Website:</span> ${data.url} </p>
            </div>
      

            <div class="story">
            <h3>The Story</h3>
            <p class = "line">${data.bio}</p>
            </div>

            <div class="content">
            <img class="img-circle" src="https://avatars1.githubusercontent.com/u/30034796?v=4">
            </div>
        </div>
    </section>
    `

    return itemContainer;
}