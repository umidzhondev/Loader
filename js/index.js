const loader = document.querySelector(".loader");
const content = document.querySelector(".content");
const text = document.querySelector(".title");

setTimeout(()=>{
    loader.style.opacity = 0;
    content.style.opacity = 0;
    setTimeout(()=>{
        loader.classList.add("hidden");
        content.classList.add("visible")
        content.style.opacity = 1
    },800)
    setTimeout(()=>{
        text.classList.add("scale")
    },400)
    
},5000)