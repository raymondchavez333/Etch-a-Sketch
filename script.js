for (let i = 1; i <= 256; i++){
    
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("style", "width: 50px; height: 50px;border-style: solid; border-color: black");

    let container = document.querySelector(".container");


    container.appendChild(box);
}



