// let box = document.createElement("div");
// box.setAttribute("class", "box");
// box.setAttribute("style", "width: 50px; height: 50px;border-style: solid; border-color: black");

// let container = document.querySelector(".container");

// let unorderedlist = document.createElement("ul");

// let listItem = document.createElement("li");
// listItem.appendChild(box);


for (let i = 1; i <= 256; i++){
    
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("style", "width: 50px; height: 50px;border-style: solid; border-color: black");

    let container = document.querySelector(".container");

    let unorderedlist = document.createElement("ul");

    let listItem = document.createElement("li");
    listItem.appendChild(box);

    unorderedlist.appendChild(listItem);

    container.appendChild(listItem);
}




