
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector(".main");


form.addEventListener("submit", function (edata) {

    edata.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let photos = document.createElement("div");
    photos.classList.add("photos");
    let img = document.createElement("img");

    let information = document.createElement("div");
    information.classList.add("information");

    let h3 = document.createElement("h3");
    let h5 = document.createElement("h5");
    let p = document.createElement("p");

    img.setAttribute("src", inputs[0].value);
    h3.textContent = inputs[1].value;
    h5.textContent = inputs[2].value;
    p.textContent = inputs[3].value;


    photos.appendChild(img);
    information.append(h3, h5, p);
    card.append(photos, information);

    main.appendChild(card);

    inputs.forEach(function (val) {
        if (val.type !== "submit") {
            val.value = "";
        }
    });

    
});

