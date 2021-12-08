const loader = document.querySelector(".loader");
const text = document.querySelector(".content");

setTimeout(()=>{
    loader.style.opacity = 0;
    text.style.opacity = 0;
    setTimeout(()=>{
        loader.classList.add("hidden");
        text.classList.add("visible")
        text.style.opacity = 1
    },800)
    
},5000)