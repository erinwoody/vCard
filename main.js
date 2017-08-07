let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/erinwoody");
req.addEventListener("load", reqListener);
req.send();

function reqListener() {
    let data = JSON.parse(this.responseText);
    let info = ``;
    console.log(info);

    data.results(function (data) {
        `${data.name}`;

        data.results(function (data) {
            list += `<li>${data.name}</li>`;

            data.results(function (data) {
                list += `<li>${data.html_url}</li>`;

                data.results(function (data) {
                    list += `<li>${data.email}</li>`;

                    data.results(function (data) {
                        list += `<li>${data.company}</li>`;
                    });
                });
            });
        });
    }); section.innerHTML = list;
}