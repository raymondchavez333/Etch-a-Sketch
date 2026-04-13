for (let i = 1; i <= 256; i++){
    let randomR = Math.floor(Math.random()* 255);
    let randomG = Math.floor(Math.random()* 255);
    let randomB = Math.floor(Math.random()* 255);
    
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("style", "width: 33px; height: auto; border-style: solid; border-color: black; flex-grow: 1");

    // width: 50px; height: 50px;
    let container = document.querySelector(".container");


    container.appendChild(box);

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) =>{
        box.addEventListener("mouseenter", () => {
            box.setAttribute("style", "width: 33px; height: auto; border-style: solid; border-color: black; flex-grow: 1; background-color: black");
        });
    })
}

let button = document.querySelector("button");

button.addEventListener("click", () => {

    let randomR = Math.floor(Math.random()* 255);
    let randomG = Math.floor(Math.random()* 255);
    let randomB = Math.floor(Math.random()* 255);


    let number = Number(prompt("Enter number per side(limit until 100): "));
    
    if (number > 100){
        alert("Please input until 100 only");
        return;
    }
    

    let container = document.querySelector(".container");
    container.remove();

    let newContainer = document.createElement("div");
    newContainer.setAttribute("class", "container");
    newContainer.setAttribute("style", "width: 600px; height: 600px; display: flex; flex-wrap: wrap");

    document.body.appendChild(newContainer);

    for (let i = 1; i <= number*number; i++){
    
    let newWidth = 600 / (number);
     
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("style", `width: ${newWidth}px; height: auto; border-style: solid; border-color: black; box-sizing: border-box; flex-grow: 1`);


    newContainer.appendChild(box);

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) =>{
        box.addEventListener("mouseenter", () => {
            box.setAttribute("style", `width: ${newWidth}px; height: auto; border-style: solid; border-color: black; box-sizing: border-box; flex-grow: 1; background-color: rgb(${randomR} ${randomG} ${randomB})`);
        });
    })
    }
})




