
// start magic 

let magic = document.querySelector(".magic .boxes")
let magicBtn = document.querySelector(".magic button")

magicBtn.onclick = () =>{
    magic.classList.toggle("big")
    console.log("magic")
}

for(let i =0 ; i < 4 ; i++){
    for(let j =0 ; j < 4 ; j++){
     let boxMagic = document.createElement("div")
     boxMagic.classList.add("box")

     boxMagic.style.backgroundPosition = `
     ${-j * 125}px ${-i * 125}px
     `
     magic.append(boxMagic)
    }
}

