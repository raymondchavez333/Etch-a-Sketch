for (let i = 1; i <= 256; i++){
    
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
    let number = Number(prompt("Enter number per side(limit until 100): "));
    
    console.log(number + 5);

    let container = document.querySelector(".container");
    container.remove();

    for (let i = 1; i <= number; i++){
    
    const newWidth = 550 / number;
     
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("style", `width: ${newWidth}px; height: auto; border-style: solid; border-color: black; flex-grow: 1`);

    // width: 50px; height: 50px;
    let newContainer = document.createElement("div");
    newContainer.classList("container");


    newContainer.appendChild(box);

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) =>{
        box.addEventListener("mouseenter", () => {
            box.setAttribute("style", `width: ${newWidth}px; height: auto; border-style: solid; border-color: black; flex-grow: 1; background-color: black`);
        });
    })
    }
})




