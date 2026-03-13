for (let i = 1; i <= 256; i++){
    
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("style", ";border-style: solid; border-color: black");

    // width: 50px; height: 50px

    let container = document.querySelector(".container");


    container.appendChild(box);
}



